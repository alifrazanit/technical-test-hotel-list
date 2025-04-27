import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_ALL_HOTELS = gql`
  query GetHotels($offset: Int!, $limit: Int!, $orderFieldDirection: orderFieldDirection!, $orderByField: String) {
    getHotels(offset: $offset, limit: $limit, orderFieldDirection: $orderFieldDirection, orderByField: $orderByField) {
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

  getHotels(params: any) {
    return this.apollo.watchQuery({
      query: GET_ALL_HOTELS,
      variables: {
        ...params
      }
    })
  }
}
