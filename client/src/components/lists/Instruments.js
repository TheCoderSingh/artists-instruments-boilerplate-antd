import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { GET_INSTRUMENTS } from '../../queries'

import { List } from 'antd'

import Instrument from '../listItems/Instrument'

const getStyles = () => ({
  list: {
    display: 'flex',
    justifyContent: 'center'
  }
})

const Instruments = () => {
  const styles = getStyles()

  const { loading, error, data } = useQuery(GET_INSTRUMENTS)
  if (loading) return 'Loading...'
  if (error) return `Errror! ${error.message}`
  return (
    <List grid={{ gutter: 20, column: 1 }} style={styles.list}>
      {data.instruments.map(({ id, year, brand, model, price, artistid }) => (
        <List.Item key={id}>
          <Instrument key={id} id={id} year={year} brand={brand} model={model} price={price} artistid={artistid} />
        </List.Item>
      ))}
    </List>
  )
}

export default Instruments
