import React, { useEffect, useState } from 'react'
import { useMutation } from '@apollo/react-hooks'
import { Form, Input, Button } from 'antd'
import { UPDATE_INSTRUMENT } from '../../queries'

const UpdateInstrument = props => {
  const [id] = useState(props.id)
  const [year, setYear] = useState(props.year)
  const [brand, setBrand] = useState(props.brand)
  const [model, setModel] = useState(props.model)
  const [price, setPrice] = useState(props.price)
  const [artistid, setArtistId] = useState(props.artistid)
  const [UpdateInstrument] = useMutation(UPDATE_INSTRUMENT)

  const [form] = Form.useForm()
  const [, forceUpdate] = useState()

  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = values => {
    const { year, brand, model, price, artistid } = values
    UpdateInstrument({
      variables: {
        id,
        year,
        brand,
        model,
        price,
        artistid
      },
      optimisticResponse: {
        __typename: 'Mutation',
        UpdateInstrument: {
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
    props.onButtonClick()
  }

  const updateStateVariable = (variable, value) => {
    switch (variable) {
      case 'year':
        props.updateStateVariable('year', value)
        setYear(value)
        break
      case 'brand':
        props.updateStateVariable('brand', value)
        setBrand(value)
        break
      case 'model':
        props.updateStateVariable('model', value)
        setModel(value)
        break
      case 'price':
        props.updateStateVariable('price', value)
        setPrice(value)
        break
      case 'artistid':
        props.updateStateVariable('artistid', value)
        setArtistId(value)
        break
      default:
        break
    }
  }

  return (
    <Form
      form={form}
      name='update-instrument-form'
      layout='inline'
      onFinish={onFinish}
      initialValues={{
        year: year,
        brand: brand,
        model: model,
        price: price,
        artistid: artistid
      }}
      size='large'
    >
      <Form.Item
        name='year'
        label='Year'
        rules={[{ required: true, message: 'Please input the year!' }]}
      >
        <Input
          placeholder='i.e. 2015'
          onChange={e => updateStateVariable('year', e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name='brand'
        label='Brand'
        rules={[{ required: true, message: 'Please input the brand!' }]}
      >
        <Input
          placeholder='i.e. Tesla'
          onChange={e => updateStateVariable('brand', e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name='model'
        label='Model'
        rules={[{ required: true, message: 'Please input the model!' }]}
      >
        <Input
          placeholder='i.e. Salsa X'
          onChange={e => updateStateVariable('model', e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name='price'
        label='Price'
        rules={[{ required: true, message: 'Please input the price!' }]}
      >
        <Input
          placeholder='i.e. 123'
          onChange={e => updateStateVariable('price', e.target.value)}
        />
      </Form.Item>
      <Form.Item
        name='artistid'
        label='Artist ID'
        rules={[{ required: true, message: 'Please input the Artist ID!' }]}
      >
        <Input
          placeholder='i.e. 1'
          onChange={e => updateStateVariable('artistid', e.target.value)}
        />
      </Form.Item>

      <Form.Item shouldUpdate={true}>
        {() => (
          <Button
            type='primary'
            htmlType='submit'
            disabled={
              !form.isFieldsTouched(true) ||
              form.getFieldsError().filter(({ errors }) => errors.length).length
            }
          >
            Update Instrument
          </Button>
        )}
      </Form.Item>
      <Button onClick={props.onButtonClick}>Cancel</Button>
    </Form>
  )
}

export default UpdateInstrument
