import { gql } from 'apollo-boost'

export const GET_ARTISTS = gql`
  {
    artists {
      id
      firstName
      lastName
    }
  }
`

export const ADD_ARTIST = gql`
  mutation AddArtist($id: String!, $firstName: String!, $lastName: String!) {
    addArtist(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const UPDATE_ARTIST = gql`
  mutation UpdateArtist(
    $id: String!
    $firstName: String!
    $lastName: String!
  ) {
    updateArtist(id: $id, firstName: $firstName, lastName: $lastName) {
      id
      firstName
      lastName
    }
  }
`

export const REMOVE_ARTIST = gql`
  mutation RemoveArtist($id: String!) {
    removeArtist(id: $id) {
      id
      firstName
      lastName
    }
  }
`

export const GET_INSTRUMENTS = gql`
  {
    instruments {
      id
      year
      brand
      model
      price
      artistid
    }
  }
`

export const ADD_INSTRUMENT = gql`
  mutation AddInstrument($id: String!, $year: String!, $brand: String!, $model: String!, $price: String!, $artistid: String!) {
    addInstrument(id: $id, year: $year, brand: $brand, model: $model, price: $price, artistid: $artistid) {
      id
      year
      brand
      model
      price
      artistid
    }
  }
`
export const UPDATE_INSTRUMENT = gql`
  mutation UpdateInstrument(
    $id: String!
    $year: String!
    $brand: String!
    $model: String!
    $price: String!
    $artistid: String!
  ) {
    updateInstrument(id: $id, year: $year, brand: $brand, model: $model, price: $price, artistid: $artistid) {
      id
      year
      brand
      model
      price
      artistid
    }
  }
`

export const REMOVE_INSTRUMENT = gql`
  mutation RemoveInstrument($id: String!) {
    removeInstrument(id: $id) {
      id
      year
      brand
      model
      price
      artistid
    }
  }
`