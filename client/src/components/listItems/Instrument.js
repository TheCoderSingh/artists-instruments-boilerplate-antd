import React, { useState } from 'react'
import { Card, List } from 'antd'

import { EditOutlined } from '@ant-design/icons'
import UpdateInstrument from '../forms/UpdateInstrument'
// import RemoveArtist from '../buttons/RemoveArtist'

const getStyles = () => ({
  card: {
    width: '500px'
  }
})

const Instrument = props => {
  const [id] = useState(props.id)
  const [year, setYear] = useState(props.year)
  const [brand, setBrand] = useState(props.brand)
  const [model, setModel] = useState(props.model)
  const [price, setPrice] = useState(props.price)
  const [artistid, setArtistId] = useState(props.artistid)
  const [editMode, setEditMode] = useState(false)

  const styles = getStyles()

  const instrumentDetails = () => {
    return `${props.year} ${props.brand} ${props.model} ${props.price} ${props.artistid}`
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'year':
        setYear(value)
        break
      case 'brand':
        setBrand(value)
        break
      case 'model':
        setModel(value)
        break
      case 'price':
        setPrice(value)
        break
      case 'artistid':
        setArtistId(value)
        break
      default:
        break
    }
  }

  const handleButtonClick = () => setEditMode(!editMode)

  return (
    <List.Item key={props.id}>
      {editMode ? (
        <UpdateInstrument
          id={id}
          year={year}
          brand={brand}
          model={model}
          price={price}
          artistid={artistid}
          onButtonClick={handleButtonClick}
          updateStateVariable={updateStateVariable}
        />
      ) : (
          <Card
            actions={[
              <EditOutlined key='edit' onClick={handleButtonClick} />,
              // <RemoveArtist id={id} firstName={firstName} lastName={lastName} />
            ]}
            style={styles.card}
          >
            {instrumentDetails()}
          </Card>
        )}
    </List.Item>
  )
}

export default Instrument
