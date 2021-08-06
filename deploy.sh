#!/bin/bash

# https://bitbucket.org/atlassian/npm-publish/src/master/LICENSE.txt

# Copyright @ 2018 Atlassian Pty Ltd

# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at

#     http://www.apache.org/licenses/LICENSE-2.0

# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

#
# npm deploy pipe
#
# Required globals:
#   NPM_TOKEN
#
# Optional globals:
#   FOLDER
#   EXTRA_ARGS
#   DEBUG
#

# Begin Standard 'imports'
set -e
set -o pipefail


gray="\\e[37m"
blue="\\e[36m"
red="\\e[31m"
green="\\e[32m"
reset="\\e[0m"

#######################################
# echoes a message in blue
# Globals:
#   None
# Arguments:
#   Message
# Returns:
#   None
#######################################
info() { echo -e "${blue}INFO: $*${reset}"; }

#######################################
# echoes a message in red
# Globals:
#   None
# Arguments:
#   Message
# Returns:
#   None
#######################################
error() { echo -e "${red}ERROR: $*${reset}"; }

#######################################
# echoes a message in grey. Only if debug mode is enabled
# Globals:
#   DEBUG
# Arguments:
#   Message
# Returns:
#   None
#######################################
debug() {
  if [[ "${DEBUG}" == "true" ]]; then
    echo -e "${gray}DEBUG: $*${reset}";
  fi
}

#######################################
# echoes a message in green
# Globals:
#   None
# Arguments:
#   Message
# Returns:
#   None
#######################################
success() { echo -e "${green}âœ” $*${reset}"; }

#######################################
# echoes a message in red and terminates the programm
# Globals:
#   None
# Arguments:
#   Message
# Returns:
#   None
#######################################
fail() { echo -e "${red}âœ– $*${reset}"; exit 1; }

## Enable debug mode.
enable_debug() {
  if [[ "${DEBUG}" == "true" ]]; then
    info "Enabling debug mode."
    set -x
  fi
}

#######################################
# echoes a message in blue
# Globals:
#   status: Exit status of the command that was executed.
#   output_file: Local path with captured output generated from the command.
# Arguments:
#   command: command to run
# Returns:
#   None
#######################################
run() {
  output_file="/var/tmp/pipe-$(date +%s)-$RANDOM"

  echo "$@"
  set +e
  "$@" | tee "$output_file"
  status=$?
  set -e
}

# End standard 'imports'

info "Starting pipe execution..."

# required parameters
NPM_TOKEN=${NPM_TOKEN:?'NPM_TOKEN variable missing.'}

# optional parameters
NPM_REGISTRY_AUTH_URL=${NPM_REGISTRY_AUTH_URL:=""}
FOLDER=${FOLDER:="."}
EXTRA_ARGS=${EXTRA_ARGS:=""}
DEBUG=${DEBUG:="false"}

DEBUG_ARGS=""
if [[ "${DEBUG}" == "true" ]]; then
  info "Enabling debug mode."
  set -x
  DEBUG_ARGS="--verbose"
fi

# Getting package.json configuration
package_json=$(cat "${FOLDER}"/package.json)
debug "package.json file: ${package_json}"

package_name=$(echo "${package_json}" | jq -r '.name')
package_version=$(echo "${package_json}" | jq -r '.version')
npm_registry_url=$(echo "${package_json}" | jq -r '.publishConfig.registry // empty')

# Getting registry url

if [[ -z "$npm_registry_url" ]]; then
  website_url="https://www.npmjs.com/package/$package_name/v/$package_version"
  npm_registry_url="https://registry.npmjs.org"
else
  website_url=${npm_registry_url}
fi
info "Registry URL: $npm_registry_url"

# Setting NPM auth
info "Setting npm auth configuration..."

if [[ -z "${NPM_REGISTRY_AUTH_URL}" ]]; then
  npm_auth_url=$(node -p "require('url').parse('$npm_registry_url').host")
else
  npm_auth_url=${NPM_REGISTRY_AUTH_URL}
fi

set +x
npm config set //${npm_auth_url}/:_authToken "${NPM_TOKEN}"

if [[ "${DEBUG}" == "true" ]]; then
 set -x
fi

npm config set registry ${npm_registry_url}
debug "~/.npmrc file: $(cat ~/.npmrc | sed 's|'${NPM_TOKEN}'|******|')"

# Executing npm publish
info "Publishing package..."
run npm publish ${FOLDER} ${DEBUG_ARGS} ${EXTRA_ARGS}

if [[ "${status}" -eq 0 ]]; then
  success "Package \"$package_name@$package_version\" published successfully. URL: $website_url"
else
  fail "Failed to publish package \"$package_name@$package_version\"."
fi
