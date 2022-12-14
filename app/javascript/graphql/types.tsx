import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: any;
};

export type Image = {
  __typename?: 'Image';
  collection?: Maybe<Scalars['String']>;
  createdAt: Scalars['ISO8601DateTime'];
  creativeNumber: Scalars['Int'];
  credit?: Maybe<Scalars['String']>;
  extraSmallDetails: Scalars['String'];
  extraSmallPrice: Scalars['Int'];
  groupId: Scalars['Int'];
  handle: Scalars['String'];
  id: Scalars['ID'];
  largeDetails: Scalars['String'];
  largePrice: Scalars['Int'];
  licenceType?: Maybe<Scalars['String']>;
  mediumDetails: Scalars['String'];
  mediumPrice: Scalars['Int'];
  relatedImages?: Maybe<Array<Image>>;
  releaseInfo?: Maybe<Scalars['String']>;
  smallDetails: Scalars['String'];
  smallPrice: Scalars['Int'];
  subtitle?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type Mutation = {
  __typename?: 'Mutation';
  /** An example field added by the generator */
  testField: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  /** All images in the database */
  images: Array<Image>;
  /** Information on a single image */
  singleImage: Image;
  /** All tags in the database */
  tags: Array<Tag>;
};


export type QuerySingleImageArgs = {
  id: Scalars['ID'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt: Scalars['ISO8601DateTime'];
  id: Scalars['ID'];
  imageId: Scalars['ID'];
  title: Scalars['String'];
  updatedAt: Scalars['ISO8601DateTime'];
};

export type ImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type ImagesQuery = { __typename?: 'Query', images: Array<{ __typename?: 'Image', id: string, title: string, tags?: Array<{ __typename?: 'Tag', id: string, title: string }> | null }> };

export type SingleImageQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type SingleImageQuery = { __typename?: 'Query', singleImage: { __typename?: 'Image', id: string, handle: string, title: string, subtitle?: string | null, creativeNumber: number, extraSmallPrice: number, extraSmallDetails: string, smallPrice: number, smallDetails: string, mediumPrice: number, mediumDetails: string, largePrice: number, largeDetails: string, credit?: string | null, licenceType?: string | null, collection?: string | null, releaseInfo?: string | null, tags?: Array<{ __typename?: 'Tag', id: string, title: string }> | null, relatedImages?: Array<{ __typename?: 'Image', handle: string, title: string, creativeNumber: number }> | null } };


export const ImagesDocument = gql`
    query Images {
  images {
    id
    title
    tags {
      id
      title
    }
  }
}
    `;

/**
 * __useImagesQuery__
 *
 * To run a query within a React component, call `useImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useImagesQuery(baseOptions?: Apollo.QueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
      }
export function useImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ImagesQuery, ImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ImagesQuery, ImagesQueryVariables>(ImagesDocument, options);
        }
export type ImagesQueryHookResult = ReturnType<typeof useImagesQuery>;
export type ImagesLazyQueryHookResult = ReturnType<typeof useImagesLazyQuery>;
export type ImagesQueryResult = Apollo.QueryResult<ImagesQuery, ImagesQueryVariables>;
export const SingleImageDocument = gql`
    query SingleImage($id: ID!) {
  singleImage(id: $id) {
    id
    handle
    title
    subtitle
    creativeNumber
    extraSmallPrice
    extraSmallDetails
    smallPrice
    smallDetails
    mediumPrice
    mediumDetails
    largePrice
    largeDetails
    credit
    licenceType
    collection
    releaseInfo
    tags {
      id
      title
    }
    relatedImages {
      handle
      title
      creativeNumber
    }
  }
}
    `;

/**
 * __useSingleImageQuery__
 *
 * To run a query within a React component, call `useSingleImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useSingleImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSingleImageQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useSingleImageQuery(baseOptions: Apollo.QueryHookOptions<SingleImageQuery, SingleImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SingleImageQuery, SingleImageQueryVariables>(SingleImageDocument, options);
      }
export function useSingleImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SingleImageQuery, SingleImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SingleImageQuery, SingleImageQueryVariables>(SingleImageDocument, options);
        }
export type SingleImageQueryHookResult = ReturnType<typeof useSingleImageQuery>;
export type SingleImageLazyQueryHookResult = ReturnType<typeof useSingleImageLazyQuery>;
export type SingleImageQueryResult = Apollo.QueryResult<SingleImageQuery, SingleImageQueryVariables>;