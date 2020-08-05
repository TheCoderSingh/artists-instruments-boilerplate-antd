import React from 'react'
import { useMutation } from '@apollo/react-hooks'
import { filter } from 'lodash'
import { GET_INSTRUMENTS, REMOVE_INSTRUMENT } from '../../queries'
import { DeleteOutlined } from '@ant-design/icons'

const RemoveInstrument = ({ id, year, brand, model, price, artistid }) => {
  const [RemoveInstrument] = useMutation(REMOVE_INSTRUMENT, {
    update(proxy, { data: { RemoveInstrument } }) {
      const { instruments } = proxy.readQuery({ query: GET_INSTRUMENTS })
      proxy.writeQuery({
        query: GET_INSTRUMENTS,
        data: {
          instruments: filter(instruments, c => {
            return c.id !== RemoveInstrument.id
          })
        }
      })
    }
  })
  const handleButtonClick = () => {
    let result = window.confirm('Are you sure you want to delete this instrument?')
    if (result) {
      RemoveInstrument({
        variables: {
          id
        },
        optimisticResponse: {
          __typename: 'Mutation',
          RemoveInstrument: {
            __typename: 'Instrument',
            id,
            year,
            brand,
            model,
            price,
            artistid
          }
        }
      })
    }
  }
  return (
    <DeleteOutlined
      key='delete'
      onClick={handleButtonClick}
      style={{ color: 'red' }}
    />
  )
}

export default RemoveInstrument
