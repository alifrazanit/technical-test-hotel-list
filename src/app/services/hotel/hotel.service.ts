import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_HOTELS = gql`
  query GetHotels($offset: Int!, $orderFieldDirection: orderFieldDirection!, $orderByField: String, $location: String, $name: String, $limit: Int!) {
    getHotels(offset: $offset, orderFieldDirection: $orderFieldDirection, orderByField: $orderByField, location: $location, name: $name, limit: $limit) {
      id
      name
      location
      description
    }
  }
`;

const GET_ALL_HOTELS = gql`
query GetHotels($orderFieldDirection: orderFieldDirection!, $orderByField: String) {
  getHotels(orderFieldDirection: $orderFieldDirection, orderByField: $orderByField) {
    id
    name
    location
    description
  }
}

`;

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(
    private apollo: Apollo
  ) { }


  fetchAllHotel(params: any) {
    return this.apollo.watchQuery({
      query: GET_ALL_HOTELS,
      variables: {
        ...params
      }
    })
  }

  getHotels(params: any) {
    return this.apollo.watchQuery({
      query: GET_HOTELS,
      variables: {
        ...params
      }
    })
  }
}
