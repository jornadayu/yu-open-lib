import { describe, expect, test } from 'vitest'

import { groupBy } from '../src/index'

export type DataType = {
  id: number
  status: 'active' | 'placed' | 'sign_off_ok'
  // eslint-disable-next-line camelcase
  sent_to_client_month_week: string
}

const data: DataType[] = [
  {
    id: 1234,
    status: 'active',
    sent_to_client_month_week: '1a Semana / Junho / 2022'
  },
  {
    id: 1235,
    status: 'placed',
    sent_to_client_month_week: '3a Semana / Abril / 2022'
  },
  {
    id: 1236,
    status: 'active',
    sent_to_client_month_week: '2a Semana / Abril / 2022'
  },
  {
    id: 1237,
    status: 'active',
    sent_to_client_month_week: '3a Semana / Abril / 2022'
  }
]

const expectedGroups: Record<
  DataType['sent_to_client_month_week'],
  DataType[]
> = {
  '2a Semana / Abril / 2022': [
    {
      id: 1236,
      status: 'active',
      sent_to_client_month_week: '2a Semana / Abril / 2022'
    }
  ],
  '1a Semana / Junho / 2022': [
    {
      id: 1234,
      status: 'active',
      sent_to_client_month_week: '1a Semana / Junho / 2022'
    }
  ],
  '3a Semana / Abril / 2022': [
    {
      id: 1235,
      status: 'placed',
      sent_to_client_month_week: '3a Semana / Abril / 2022'
    },
    {
      id: 1237,
      status: 'active',
      sent_to_client_month_week: '3a Semana / Abril / 2022'
    }
  ]
}

describe('groupBy() helper', () => {
  test('groups data correctly', () => {
    const groupedData = groupBy(data, 'sent_to_client_month_week')

    Object.keys(groupedData).map((key, index) => ({
      id: key.toString() + index.toString(),
      title: key,
      candidates: groupedData[key]
    }))

    expect(groupedData).toMatchObject(expectedGroups)
  })

  test('grouped data can be re-mapped "type-safely"', () => {
    const groupedData = groupBy(data, 'status')

    const keys = Object.keys(groupedData) as (keyof typeof groupedData)[]

    const mappedData: {
      id: string
      title: DataType['status']
      candidates: DataType[]
    }[] = keys.map((key, index) => ({
      id: key.toString() + index.toString(),
      title: key,
      candidates: groupedData[key]
    }))

    expect(mappedData).toMatchObject([
      {
        id: 'active0',
        title: 'active',
        candidates: data.filter(({ status }) => status === 'active')
      },
      {
        id: 'placed1',
        title: 'placed',
        candidates: data.filter(({ status }) => status === 'placed')
      }
    ])
  })
})
