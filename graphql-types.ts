export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type ContentfulAsset = ContentfulReference & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  file?: Maybe<ContentfulAssetFile>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  node_locale?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAssetSys>;
  fixed?: Maybe<ContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  resolutions?: Maybe<ContentfulResolutions>;
  fluid?: Maybe<ContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  sizes?: Maybe<ContentfulSizes>;
  resize?: Maybe<ContentfulResize>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ContentfulAssetCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResolutionsArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type ContentfulAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ContentfulImageFormat>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes?: Maybe<Scalars['String']>;
};


export type ContentfulAssetResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior?: Maybe<ImageResizingBehavior>;
  toFormat?: Maybe<ContentfulImageFormat>;
  cropFocus?: Maybe<ContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type ContentfulAssetConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAssetGroupConnection>;
};


export type ContentfulAssetConnectionDistinctArgs = {
  field: ContentfulAssetFieldsEnum;
};


export type ContentfulAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAssetFieldsEnum;
};

export type ContentfulAssetEdge = {
  next?: Maybe<ContentfulAsset>;
  node: ContentfulAsset;
  previous?: Maybe<ContentfulAsset>;
};

export type ContentfulAssetFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'file___url'
  | 'file___details___size'
  | 'file___details___image___width'
  | 'file___details___image___height'
  | 'file___fileName'
  | 'file___contentType'
  | 'title'
  | 'description'
  | 'node_locale'
  | 'sys___type'
  | 'sys___revision'
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'resolutions___base64'
  | 'resolutions___tracedSVG'
  | 'resolutions___aspectRatio'
  | 'resolutions___width'
  | 'resolutions___height'
  | 'resolutions___src'
  | 'resolutions___srcSet'
  | 'resolutions___srcWebp'
  | 'resolutions___srcSetWebp'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'sizes___base64'
  | 'sizes___tracedSVG'
  | 'sizes___aspectRatio'
  | 'sizes___src'
  | 'sizes___srcSet'
  | 'sizes___srcWebp'
  | 'sizes___srcSetWebp'
  | 'sizes___sizes'
  | 'resize___base64'
  | 'resize___tracedSVG'
  | 'resize___src'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type ContentfulAssetFile = {
  url?: Maybe<Scalars['String']>;
  details?: Maybe<ContentfulAssetFileDetails>;
  fileName?: Maybe<Scalars['String']>;
  contentType?: Maybe<Scalars['String']>;
};

export type ContentfulAssetFileDetails = {
  size?: Maybe<Scalars['Int']>;
  image?: Maybe<ContentfulAssetFileDetailsImage>;
};

export type ContentfulAssetFileDetailsFilterInput = {
  size?: Maybe<IntQueryOperatorInput>;
  image?: Maybe<ContentfulAssetFileDetailsImageFilterInput>;
};

export type ContentfulAssetFileDetailsImage = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetFileDetailsImageFilterInput = {
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAssetFileFilterInput = {
  url?: Maybe<StringQueryOperatorInput>;
  details?: Maybe<ContentfulAssetFileDetailsFilterInput>;
  fileName?: Maybe<StringQueryOperatorInput>;
  contentType?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAssetFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ContentfulAssetGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAssetEdge>;
  nodes: Array<ContentfulAsset>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAssetSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAssetFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAssetSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
};

export type ContentfulAssetSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
};

export type ContentfulAuthor = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  twitterHandle?: Maybe<Scalars['String']>;
  photo_gallery?: Maybe<Array<Maybe<ContentfulPhotoGallery>>>;
  biography?: Maybe<ContentfulAuthorBiographyTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulAuthorSys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
};


export type ContentfulAuthorCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulAuthorUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  biography?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSys>;
};

export type ContentfulAuthorBiographyTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorBiographyTextNodeGroupConnection>;
};


export type ContentfulAuthorBiographyTextNodeConnectionDistinctArgs = {
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};


export type ContentfulAuthorBiographyTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorBiographyTextNodeFieldsEnum;
};

export type ContentfulAuthorBiographyTextNodeEdge = {
  next?: Maybe<ContentfulAuthorBiographyTextNode>;
  node: ContentfulAuthorBiographyTextNode;
  previous?: Maybe<ContentfulAuthorBiographyTextNode>;
};

export type ContentfulAuthorBiographyTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'biography'
  | 'sys___type';

export type ContentfulAuthorBiographyTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSysFilterInput>;
};

export type ContentfulAuthorBiographyTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorBiographyTextNodeEdge>;
  nodes: Array<ContentfulAuthorBiographyTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorBiographyTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorBiographyTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorBiographyTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulAuthorGroupConnection>;
};


export type ContentfulAuthorConnectionDistinctArgs = {
  field: ContentfulAuthorFieldsEnum;
};


export type ContentfulAuthorConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulAuthorFieldsEnum;
};

export type ContentfulAuthorEdge = {
  next?: Maybe<ContentfulAuthor>;
  node: ContentfulAuthor;
  previous?: Maybe<ContentfulAuthor>;
};

export type ContentfulAuthorFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'name'
  | 'twitterHandle'
  | 'photo_gallery'
  | 'photo_gallery___contentful_id'
  | 'photo_gallery___id'
  | 'photo_gallery___node_locale'
  | 'photo_gallery___slug'
  | 'photo_gallery___tags'
  | 'photo_gallery___date'
  | 'photo_gallery___location___lon'
  | 'photo_gallery___location___lat'
  | 'photo_gallery___author___contentful_id'
  | 'photo_gallery___author___id'
  | 'photo_gallery___author___node_locale'
  | 'photo_gallery___author___name'
  | 'photo_gallery___author___twitterHandle'
  | 'photo_gallery___author___photo_gallery'
  | 'photo_gallery___author___photo_gallery___contentful_id'
  | 'photo_gallery___author___photo_gallery___id'
  | 'photo_gallery___author___photo_gallery___node_locale'
  | 'photo_gallery___author___photo_gallery___slug'
  | 'photo_gallery___author___photo_gallery___tags'
  | 'photo_gallery___author___photo_gallery___date'
  | 'photo_gallery___author___photo_gallery___images'
  | 'photo_gallery___author___photo_gallery___spaceId'
  | 'photo_gallery___author___photo_gallery___createdAt'
  | 'photo_gallery___author___photo_gallery___updatedAt'
  | 'photo_gallery___author___photo_gallery___children'
  | 'photo_gallery___author___biography___id'
  | 'photo_gallery___author___biography___children'
  | 'photo_gallery___author___biography___biography'
  | 'photo_gallery___author___spaceId'
  | 'photo_gallery___author___createdAt'
  | 'photo_gallery___author___updatedAt'
  | 'photo_gallery___author___sys___type'
  | 'photo_gallery___author___sys___revision'
  | 'photo_gallery___author___parent___id'
  | 'photo_gallery___author___parent___children'
  | 'photo_gallery___author___children'
  | 'photo_gallery___author___children___id'
  | 'photo_gallery___author___children___children'
  | 'photo_gallery___author___internal___content'
  | 'photo_gallery___author___internal___contentDigest'
  | 'photo_gallery___author___internal___description'
  | 'photo_gallery___author___internal___fieldOwners'
  | 'photo_gallery___author___internal___ignoreType'
  | 'photo_gallery___author___internal___mediaType'
  | 'photo_gallery___author___internal___owner'
  | 'photo_gallery___author___internal___type'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___id'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___children'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___biography'
  | 'photo_gallery___images'
  | 'photo_gallery___images___contentful_id'
  | 'photo_gallery___images___id'
  | 'photo_gallery___images___node_locale'
  | 'photo_gallery___images___title'
  | 'photo_gallery___images___photo_gallery'
  | 'photo_gallery___images___photo_gallery___contentful_id'
  | 'photo_gallery___images___photo_gallery___id'
  | 'photo_gallery___images___photo_gallery___node_locale'
  | 'photo_gallery___images___photo_gallery___slug'
  | 'photo_gallery___images___photo_gallery___tags'
  | 'photo_gallery___images___photo_gallery___date'
  | 'photo_gallery___images___photo_gallery___images'
  | 'photo_gallery___images___photo_gallery___spaceId'
  | 'photo_gallery___images___photo_gallery___createdAt'
  | 'photo_gallery___images___photo_gallery___updatedAt'
  | 'photo_gallery___images___photo_gallery___children'
  | 'photo_gallery___images___imageCaption___id'
  | 'photo_gallery___images___imageCaption___children'
  | 'photo_gallery___images___imageCaption___imageCaption'
  | 'photo_gallery___images___imageCredits___id'
  | 'photo_gallery___images___imageCredits___children'
  | 'photo_gallery___images___imageCredits___imageCredits'
  | 'photo_gallery___images___spaceId'
  | 'photo_gallery___images___createdAt'
  | 'photo_gallery___images___updatedAt'
  | 'photo_gallery___images___sys___type'
  | 'photo_gallery___images___sys___revision'
  | 'photo_gallery___images___photo___contentful_id'
  | 'photo_gallery___images___photo___id'
  | 'photo_gallery___images___photo___spaceId'
  | 'photo_gallery___images___photo___createdAt'
  | 'photo_gallery___images___photo___updatedAt'
  | 'photo_gallery___images___photo___title'
  | 'photo_gallery___images___photo___description'
  | 'photo_gallery___images___photo___node_locale'
  | 'photo_gallery___images___photo___children'
  | 'photo_gallery___images___parent___id'
  | 'photo_gallery___images___parent___children'
  | 'photo_gallery___images___children'
  | 'photo_gallery___images___children___id'
  | 'photo_gallery___images___children___children'
  | 'photo_gallery___images___internal___content'
  | 'photo_gallery___images___internal___contentDigest'
  | 'photo_gallery___images___internal___description'
  | 'photo_gallery___images___internal___fieldOwners'
  | 'photo_gallery___images___internal___ignoreType'
  | 'photo_gallery___images___internal___mediaType'
  | 'photo_gallery___images___internal___owner'
  | 'photo_gallery___images___internal___type'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'photo_gallery___title___id'
  | 'photo_gallery___title___parent___id'
  | 'photo_gallery___title___parent___children'
  | 'photo_gallery___title___children'
  | 'photo_gallery___title___children___id'
  | 'photo_gallery___title___children___children'
  | 'photo_gallery___title___internal___content'
  | 'photo_gallery___title___internal___contentDigest'
  | 'photo_gallery___title___internal___description'
  | 'photo_gallery___title___internal___fieldOwners'
  | 'photo_gallery___title___internal___ignoreType'
  | 'photo_gallery___title___internal___mediaType'
  | 'photo_gallery___title___internal___owner'
  | 'photo_gallery___title___internal___type'
  | 'photo_gallery___title___title'
  | 'photo_gallery___title___sys___type'
  | 'photo_gallery___description___id'
  | 'photo_gallery___description___parent___id'
  | 'photo_gallery___description___parent___children'
  | 'photo_gallery___description___children'
  | 'photo_gallery___description___children___id'
  | 'photo_gallery___description___children___children'
  | 'photo_gallery___description___internal___content'
  | 'photo_gallery___description___internal___contentDigest'
  | 'photo_gallery___description___internal___description'
  | 'photo_gallery___description___internal___fieldOwners'
  | 'photo_gallery___description___internal___ignoreType'
  | 'photo_gallery___description___internal___mediaType'
  | 'photo_gallery___description___internal___owner'
  | 'photo_gallery___description___internal___type'
  | 'photo_gallery___description___description'
  | 'photo_gallery___description___sys___type'
  | 'photo_gallery___spaceId'
  | 'photo_gallery___createdAt'
  | 'photo_gallery___updatedAt'
  | 'photo_gallery___sys___type'
  | 'photo_gallery___sys___revision'
  | 'photo_gallery___parent___id'
  | 'photo_gallery___parent___parent___id'
  | 'photo_gallery___parent___parent___children'
  | 'photo_gallery___parent___children'
  | 'photo_gallery___parent___children___id'
  | 'photo_gallery___parent___children___children'
  | 'photo_gallery___parent___internal___content'
  | 'photo_gallery___parent___internal___contentDigest'
  | 'photo_gallery___parent___internal___description'
  | 'photo_gallery___parent___internal___fieldOwners'
  | 'photo_gallery___parent___internal___ignoreType'
  | 'photo_gallery___parent___internal___mediaType'
  | 'photo_gallery___parent___internal___owner'
  | 'photo_gallery___parent___internal___type'
  | 'photo_gallery___children'
  | 'photo_gallery___children___id'
  | 'photo_gallery___children___parent___id'
  | 'photo_gallery___children___parent___children'
  | 'photo_gallery___children___children'
  | 'photo_gallery___children___children___id'
  | 'photo_gallery___children___children___children'
  | 'photo_gallery___children___internal___content'
  | 'photo_gallery___children___internal___contentDigest'
  | 'photo_gallery___children___internal___description'
  | 'photo_gallery___children___internal___fieldOwners'
  | 'photo_gallery___children___internal___ignoreType'
  | 'photo_gallery___children___internal___mediaType'
  | 'photo_gallery___children___internal___owner'
  | 'photo_gallery___children___internal___type'
  | 'photo_gallery___internal___content'
  | 'photo_gallery___internal___contentDigest'
  | 'photo_gallery___internal___description'
  | 'photo_gallery___internal___fieldOwners'
  | 'photo_gallery___internal___ignoreType'
  | 'photo_gallery___internal___mediaType'
  | 'photo_gallery___internal___owner'
  | 'photo_gallery___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___sys___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___sys___type'
  | 'biography___id'
  | 'biography___parent___id'
  | 'biography___parent___parent___id'
  | 'biography___parent___parent___children'
  | 'biography___parent___children'
  | 'biography___parent___children___id'
  | 'biography___parent___children___children'
  | 'biography___parent___internal___content'
  | 'biography___parent___internal___contentDigest'
  | 'biography___parent___internal___description'
  | 'biography___parent___internal___fieldOwners'
  | 'biography___parent___internal___ignoreType'
  | 'biography___parent___internal___mediaType'
  | 'biography___parent___internal___owner'
  | 'biography___parent___internal___type'
  | 'biography___children'
  | 'biography___children___id'
  | 'biography___children___parent___id'
  | 'biography___children___parent___children'
  | 'biography___children___children'
  | 'biography___children___children___id'
  | 'biography___children___children___children'
  | 'biography___children___internal___content'
  | 'biography___children___internal___contentDigest'
  | 'biography___children___internal___description'
  | 'biography___children___internal___fieldOwners'
  | 'biography___children___internal___ignoreType'
  | 'biography___children___internal___mediaType'
  | 'biography___children___internal___owner'
  | 'biography___children___internal___type'
  | 'biography___internal___content'
  | 'biography___internal___contentDigest'
  | 'biography___internal___description'
  | 'biography___internal___fieldOwners'
  | 'biography___internal___ignoreType'
  | 'biography___internal___mediaType'
  | 'biography___internal___owner'
  | 'biography___internal___type'
  | 'biography___biography'
  | 'biography___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulAuthorBiographyTextNode___id'
  | 'childContentfulAuthorBiographyTextNode___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___id'
  | 'childContentfulAuthorBiographyTextNode___parent___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children'
  | 'childContentfulAuthorBiographyTextNode___parent___children___id'
  | 'childContentfulAuthorBiographyTextNode___parent___children___children'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___content'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___description'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___parent___internal___type'
  | 'childContentfulAuthorBiographyTextNode___children'
  | 'childContentfulAuthorBiographyTextNode___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___id'
  | 'childContentfulAuthorBiographyTextNode___children___parent___children'
  | 'childContentfulAuthorBiographyTextNode___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___children___id'
  | 'childContentfulAuthorBiographyTextNode___children___children___children'
  | 'childContentfulAuthorBiographyTextNode___children___internal___content'
  | 'childContentfulAuthorBiographyTextNode___children___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___children___internal___description'
  | 'childContentfulAuthorBiographyTextNode___children___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___children___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___children___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___children___internal___type'
  | 'childContentfulAuthorBiographyTextNode___internal___content'
  | 'childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'childContentfulAuthorBiographyTextNode___internal___description'
  | 'childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'childContentfulAuthorBiographyTextNode___internal___owner'
  | 'childContentfulAuthorBiographyTextNode___internal___type'
  | 'childContentfulAuthorBiographyTextNode___biography'
  | 'childContentfulAuthorBiographyTextNode___sys___type';

export type ContentfulAuthorFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  twitterHandle?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};

export type ContentfulAuthorGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulAuthorEdge>;
  nodes: Array<ContentfulAuthor>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulAuthorFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulAuthorSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulAuthorSysContentType>;
};

export type ContentfulAuthorSysContentType = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSys>;
};

export type ContentfulAuthorSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulAuthorSysContentTypeSysFilterInput>;
};

export type ContentfulAuthorSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulAuthorSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulAuthorSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulAuthorSysContentTypeFilterInput>;
};

export type ContentfulContentType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  name?: Maybe<Scalars['String']>;
  displayField?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulContentTypeSys>;
};

export type ContentfulContentTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulContentTypeGroupConnection>;
};


export type ContentfulContentTypeConnectionDistinctArgs = {
  field: ContentfulContentTypeFieldsEnum;
};


export type ContentfulContentTypeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulContentTypeFieldsEnum;
};

export type ContentfulContentTypeEdge = {
  next?: Maybe<ContentfulContentType>;
  node: ContentfulContentType;
  previous?: Maybe<ContentfulContentType>;
};

export type ContentfulContentTypeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'name'
  | 'displayField'
  | 'sys___type';

export type ContentfulContentTypeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};

export type ContentfulContentTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulContentTypeEdge>;
  nodes: Array<ContentfulContentType>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulContentTypeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulContentTypeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntry = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
};

export type ContentfulEntryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulEntryGroupConnection>;
};


export type ContentfulEntryConnectionDistinctArgs = {
  field: ContentfulEntryFieldsEnum;
};


export type ContentfulEntryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulEntryFieldsEnum;
};

export type ContentfulEntryEdge = {
  next?: Maybe<ContentfulEntry>;
  node: ContentfulEntry;
  previous?: Maybe<ContentfulEntry>;
};

export type ContentfulEntryFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale';

export type ContentfulEntryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulEntryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulEntryEdge>;
  nodes: Array<ContentfulEntry>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulEntrySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulEntryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImage = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  title?: Maybe<Scalars['String']>;
  photo_gallery?: Maybe<Array<Maybe<ContentfulPhotoGallery>>>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNode>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulImageSys>;
  photo?: Maybe<ContentfulAsset>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNode>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNode>;
};


export type ContentfulImageCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulImageUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulImageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageGroupConnection>;
};


export type ContentfulImageConnectionDistinctArgs = {
  field: ContentfulImageFieldsEnum;
};


export type ContentfulImageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageFieldsEnum;
};

export type ContentfulImageCropFocus = 
  | 'TOP'
  | 'TOP_LEFT'
  | 'TOP_RIGHT'
  | 'BOTTOM'
  | 'BOTTOM_RIGHT'
  | 'BOTTOM_LEFT'
  | 'RIGHT'
  | 'LEFT'
  | 'FACE'
  | 'FACES'
  | 'CENTER';

export type ContentfulImageEdge = {
  next?: Maybe<ContentfulImage>;
  node: ContentfulImage;
  previous?: Maybe<ContentfulImage>;
};

export type ContentfulImageFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'title'
  | 'photo_gallery'
  | 'photo_gallery___contentful_id'
  | 'photo_gallery___id'
  | 'photo_gallery___node_locale'
  | 'photo_gallery___slug'
  | 'photo_gallery___tags'
  | 'photo_gallery___date'
  | 'photo_gallery___location___lon'
  | 'photo_gallery___location___lat'
  | 'photo_gallery___author___contentful_id'
  | 'photo_gallery___author___id'
  | 'photo_gallery___author___node_locale'
  | 'photo_gallery___author___name'
  | 'photo_gallery___author___twitterHandle'
  | 'photo_gallery___author___photo_gallery'
  | 'photo_gallery___author___photo_gallery___contentful_id'
  | 'photo_gallery___author___photo_gallery___id'
  | 'photo_gallery___author___photo_gallery___node_locale'
  | 'photo_gallery___author___photo_gallery___slug'
  | 'photo_gallery___author___photo_gallery___tags'
  | 'photo_gallery___author___photo_gallery___date'
  | 'photo_gallery___author___photo_gallery___images'
  | 'photo_gallery___author___photo_gallery___spaceId'
  | 'photo_gallery___author___photo_gallery___createdAt'
  | 'photo_gallery___author___photo_gallery___updatedAt'
  | 'photo_gallery___author___photo_gallery___children'
  | 'photo_gallery___author___biography___id'
  | 'photo_gallery___author___biography___children'
  | 'photo_gallery___author___biography___biography'
  | 'photo_gallery___author___spaceId'
  | 'photo_gallery___author___createdAt'
  | 'photo_gallery___author___updatedAt'
  | 'photo_gallery___author___sys___type'
  | 'photo_gallery___author___sys___revision'
  | 'photo_gallery___author___parent___id'
  | 'photo_gallery___author___parent___children'
  | 'photo_gallery___author___children'
  | 'photo_gallery___author___children___id'
  | 'photo_gallery___author___children___children'
  | 'photo_gallery___author___internal___content'
  | 'photo_gallery___author___internal___contentDigest'
  | 'photo_gallery___author___internal___description'
  | 'photo_gallery___author___internal___fieldOwners'
  | 'photo_gallery___author___internal___ignoreType'
  | 'photo_gallery___author___internal___mediaType'
  | 'photo_gallery___author___internal___owner'
  | 'photo_gallery___author___internal___type'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___id'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___children'
  | 'photo_gallery___author___childContentfulAuthorBiographyTextNode___biography'
  | 'photo_gallery___images'
  | 'photo_gallery___images___contentful_id'
  | 'photo_gallery___images___id'
  | 'photo_gallery___images___node_locale'
  | 'photo_gallery___images___title'
  | 'photo_gallery___images___photo_gallery'
  | 'photo_gallery___images___photo_gallery___contentful_id'
  | 'photo_gallery___images___photo_gallery___id'
  | 'photo_gallery___images___photo_gallery___node_locale'
  | 'photo_gallery___images___photo_gallery___slug'
  | 'photo_gallery___images___photo_gallery___tags'
  | 'photo_gallery___images___photo_gallery___date'
  | 'photo_gallery___images___photo_gallery___images'
  | 'photo_gallery___images___photo_gallery___spaceId'
  | 'photo_gallery___images___photo_gallery___createdAt'
  | 'photo_gallery___images___photo_gallery___updatedAt'
  | 'photo_gallery___images___photo_gallery___children'
  | 'photo_gallery___images___imageCaption___id'
  | 'photo_gallery___images___imageCaption___children'
  | 'photo_gallery___images___imageCaption___imageCaption'
  | 'photo_gallery___images___imageCredits___id'
  | 'photo_gallery___images___imageCredits___children'
  | 'photo_gallery___images___imageCredits___imageCredits'
  | 'photo_gallery___images___spaceId'
  | 'photo_gallery___images___createdAt'
  | 'photo_gallery___images___updatedAt'
  | 'photo_gallery___images___sys___type'
  | 'photo_gallery___images___sys___revision'
  | 'photo_gallery___images___photo___contentful_id'
  | 'photo_gallery___images___photo___id'
  | 'photo_gallery___images___photo___spaceId'
  | 'photo_gallery___images___photo___createdAt'
  | 'photo_gallery___images___photo___updatedAt'
  | 'photo_gallery___images___photo___title'
  | 'photo_gallery___images___photo___description'
  | 'photo_gallery___images___photo___node_locale'
  | 'photo_gallery___images___photo___children'
  | 'photo_gallery___images___parent___id'
  | 'photo_gallery___images___parent___children'
  | 'photo_gallery___images___children'
  | 'photo_gallery___images___children___id'
  | 'photo_gallery___images___children___children'
  | 'photo_gallery___images___internal___content'
  | 'photo_gallery___images___internal___contentDigest'
  | 'photo_gallery___images___internal___description'
  | 'photo_gallery___images___internal___fieldOwners'
  | 'photo_gallery___images___internal___ignoreType'
  | 'photo_gallery___images___internal___mediaType'
  | 'photo_gallery___images___internal___owner'
  | 'photo_gallery___images___internal___type'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___id'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___children'
  | 'photo_gallery___images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'photo_gallery___title___id'
  | 'photo_gallery___title___parent___id'
  | 'photo_gallery___title___parent___children'
  | 'photo_gallery___title___children'
  | 'photo_gallery___title___children___id'
  | 'photo_gallery___title___children___children'
  | 'photo_gallery___title___internal___content'
  | 'photo_gallery___title___internal___contentDigest'
  | 'photo_gallery___title___internal___description'
  | 'photo_gallery___title___internal___fieldOwners'
  | 'photo_gallery___title___internal___ignoreType'
  | 'photo_gallery___title___internal___mediaType'
  | 'photo_gallery___title___internal___owner'
  | 'photo_gallery___title___internal___type'
  | 'photo_gallery___title___title'
  | 'photo_gallery___title___sys___type'
  | 'photo_gallery___description___id'
  | 'photo_gallery___description___parent___id'
  | 'photo_gallery___description___parent___children'
  | 'photo_gallery___description___children'
  | 'photo_gallery___description___children___id'
  | 'photo_gallery___description___children___children'
  | 'photo_gallery___description___internal___content'
  | 'photo_gallery___description___internal___contentDigest'
  | 'photo_gallery___description___internal___description'
  | 'photo_gallery___description___internal___fieldOwners'
  | 'photo_gallery___description___internal___ignoreType'
  | 'photo_gallery___description___internal___mediaType'
  | 'photo_gallery___description___internal___owner'
  | 'photo_gallery___description___internal___type'
  | 'photo_gallery___description___description'
  | 'photo_gallery___description___sys___type'
  | 'photo_gallery___spaceId'
  | 'photo_gallery___createdAt'
  | 'photo_gallery___updatedAt'
  | 'photo_gallery___sys___type'
  | 'photo_gallery___sys___revision'
  | 'photo_gallery___parent___id'
  | 'photo_gallery___parent___parent___id'
  | 'photo_gallery___parent___parent___children'
  | 'photo_gallery___parent___children'
  | 'photo_gallery___parent___children___id'
  | 'photo_gallery___parent___children___children'
  | 'photo_gallery___parent___internal___content'
  | 'photo_gallery___parent___internal___contentDigest'
  | 'photo_gallery___parent___internal___description'
  | 'photo_gallery___parent___internal___fieldOwners'
  | 'photo_gallery___parent___internal___ignoreType'
  | 'photo_gallery___parent___internal___mediaType'
  | 'photo_gallery___parent___internal___owner'
  | 'photo_gallery___parent___internal___type'
  | 'photo_gallery___children'
  | 'photo_gallery___children___id'
  | 'photo_gallery___children___parent___id'
  | 'photo_gallery___children___parent___children'
  | 'photo_gallery___children___children'
  | 'photo_gallery___children___children___id'
  | 'photo_gallery___children___children___children'
  | 'photo_gallery___children___internal___content'
  | 'photo_gallery___children___internal___contentDigest'
  | 'photo_gallery___children___internal___description'
  | 'photo_gallery___children___internal___fieldOwners'
  | 'photo_gallery___children___internal___ignoreType'
  | 'photo_gallery___children___internal___mediaType'
  | 'photo_gallery___children___internal___owner'
  | 'photo_gallery___children___internal___type'
  | 'photo_gallery___internal___content'
  | 'photo_gallery___internal___contentDigest'
  | 'photo_gallery___internal___description'
  | 'photo_gallery___internal___fieldOwners'
  | 'photo_gallery___internal___ignoreType'
  | 'photo_gallery___internal___mediaType'
  | 'photo_gallery___internal___owner'
  | 'photo_gallery___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'photo_gallery___childContentfulPhotoGalleryTitleTextNode___sys___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___sys___type'
  | 'imageCaption___id'
  | 'imageCaption___parent___id'
  | 'imageCaption___parent___parent___id'
  | 'imageCaption___parent___parent___children'
  | 'imageCaption___parent___children'
  | 'imageCaption___parent___children___id'
  | 'imageCaption___parent___children___children'
  | 'imageCaption___parent___internal___content'
  | 'imageCaption___parent___internal___contentDigest'
  | 'imageCaption___parent___internal___description'
  | 'imageCaption___parent___internal___fieldOwners'
  | 'imageCaption___parent___internal___ignoreType'
  | 'imageCaption___parent___internal___mediaType'
  | 'imageCaption___parent___internal___owner'
  | 'imageCaption___parent___internal___type'
  | 'imageCaption___children'
  | 'imageCaption___children___id'
  | 'imageCaption___children___parent___id'
  | 'imageCaption___children___parent___children'
  | 'imageCaption___children___children'
  | 'imageCaption___children___children___id'
  | 'imageCaption___children___children___children'
  | 'imageCaption___children___internal___content'
  | 'imageCaption___children___internal___contentDigest'
  | 'imageCaption___children___internal___description'
  | 'imageCaption___children___internal___fieldOwners'
  | 'imageCaption___children___internal___ignoreType'
  | 'imageCaption___children___internal___mediaType'
  | 'imageCaption___children___internal___owner'
  | 'imageCaption___children___internal___type'
  | 'imageCaption___internal___content'
  | 'imageCaption___internal___contentDigest'
  | 'imageCaption___internal___description'
  | 'imageCaption___internal___fieldOwners'
  | 'imageCaption___internal___ignoreType'
  | 'imageCaption___internal___mediaType'
  | 'imageCaption___internal___owner'
  | 'imageCaption___internal___type'
  | 'imageCaption___imageCaption'
  | 'imageCaption___sys___type'
  | 'imageCredits___id'
  | 'imageCredits___parent___id'
  | 'imageCredits___parent___parent___id'
  | 'imageCredits___parent___parent___children'
  | 'imageCredits___parent___children'
  | 'imageCredits___parent___children___id'
  | 'imageCredits___parent___children___children'
  | 'imageCredits___parent___internal___content'
  | 'imageCredits___parent___internal___contentDigest'
  | 'imageCredits___parent___internal___description'
  | 'imageCredits___parent___internal___fieldOwners'
  | 'imageCredits___parent___internal___ignoreType'
  | 'imageCredits___parent___internal___mediaType'
  | 'imageCredits___parent___internal___owner'
  | 'imageCredits___parent___internal___type'
  | 'imageCredits___children'
  | 'imageCredits___children___id'
  | 'imageCredits___children___parent___id'
  | 'imageCredits___children___parent___children'
  | 'imageCredits___children___children'
  | 'imageCredits___children___children___id'
  | 'imageCredits___children___children___children'
  | 'imageCredits___children___internal___content'
  | 'imageCredits___children___internal___contentDigest'
  | 'imageCredits___children___internal___description'
  | 'imageCredits___children___internal___fieldOwners'
  | 'imageCredits___children___internal___ignoreType'
  | 'imageCredits___children___internal___mediaType'
  | 'imageCredits___children___internal___owner'
  | 'imageCredits___children___internal___type'
  | 'imageCredits___internal___content'
  | 'imageCredits___internal___contentDigest'
  | 'imageCredits___internal___description'
  | 'imageCredits___internal___fieldOwners'
  | 'imageCredits___internal___ignoreType'
  | 'imageCredits___internal___mediaType'
  | 'imageCredits___internal___owner'
  | 'imageCredits___internal___type'
  | 'imageCredits___imageCredits'
  | 'imageCredits___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'photo___contentful_id'
  | 'photo___id'
  | 'photo___spaceId'
  | 'photo___createdAt'
  | 'photo___updatedAt'
  | 'photo___file___url'
  | 'photo___file___details___size'
  | 'photo___file___fileName'
  | 'photo___file___contentType'
  | 'photo___title'
  | 'photo___description'
  | 'photo___node_locale'
  | 'photo___sys___type'
  | 'photo___sys___revision'
  | 'photo___fixed___base64'
  | 'photo___fixed___tracedSVG'
  | 'photo___fixed___aspectRatio'
  | 'photo___fixed___width'
  | 'photo___fixed___height'
  | 'photo___fixed___src'
  | 'photo___fixed___srcSet'
  | 'photo___fixed___srcWebp'
  | 'photo___fixed___srcSetWebp'
  | 'photo___resolutions___base64'
  | 'photo___resolutions___tracedSVG'
  | 'photo___resolutions___aspectRatio'
  | 'photo___resolutions___width'
  | 'photo___resolutions___height'
  | 'photo___resolutions___src'
  | 'photo___resolutions___srcSet'
  | 'photo___resolutions___srcWebp'
  | 'photo___resolutions___srcSetWebp'
  | 'photo___fluid___base64'
  | 'photo___fluid___tracedSVG'
  | 'photo___fluid___aspectRatio'
  | 'photo___fluid___src'
  | 'photo___fluid___srcSet'
  | 'photo___fluid___srcWebp'
  | 'photo___fluid___srcSetWebp'
  | 'photo___fluid___sizes'
  | 'photo___sizes___base64'
  | 'photo___sizes___tracedSVG'
  | 'photo___sizes___aspectRatio'
  | 'photo___sizes___src'
  | 'photo___sizes___srcSet'
  | 'photo___sizes___srcWebp'
  | 'photo___sizes___srcSetWebp'
  | 'photo___sizes___sizes'
  | 'photo___resize___base64'
  | 'photo___resize___tracedSVG'
  | 'photo___resize___src'
  | 'photo___resize___width'
  | 'photo___resize___height'
  | 'photo___resize___aspectRatio'
  | 'photo___parent___id'
  | 'photo___parent___parent___id'
  | 'photo___parent___parent___children'
  | 'photo___parent___children'
  | 'photo___parent___children___id'
  | 'photo___parent___children___children'
  | 'photo___parent___internal___content'
  | 'photo___parent___internal___contentDigest'
  | 'photo___parent___internal___description'
  | 'photo___parent___internal___fieldOwners'
  | 'photo___parent___internal___ignoreType'
  | 'photo___parent___internal___mediaType'
  | 'photo___parent___internal___owner'
  | 'photo___parent___internal___type'
  | 'photo___children'
  | 'photo___children___id'
  | 'photo___children___parent___id'
  | 'photo___children___parent___children'
  | 'photo___children___children'
  | 'photo___children___children___id'
  | 'photo___children___children___children'
  | 'photo___children___internal___content'
  | 'photo___children___internal___contentDigest'
  | 'photo___children___internal___description'
  | 'photo___children___internal___fieldOwners'
  | 'photo___children___internal___ignoreType'
  | 'photo___children___internal___mediaType'
  | 'photo___children___internal___owner'
  | 'photo___children___internal___type'
  | 'photo___internal___content'
  | 'photo___internal___contentDigest'
  | 'photo___internal___description'
  | 'photo___internal___fieldOwners'
  | 'photo___internal___ignoreType'
  | 'photo___internal___mediaType'
  | 'photo___internal___owner'
  | 'photo___internal___type'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulImageImageCaptionTextNode___id'
  | 'childContentfulImageImageCaptionTextNode___parent___id'
  | 'childContentfulImageImageCaptionTextNode___parent___parent___id'
  | 'childContentfulImageImageCaptionTextNode___parent___parent___children'
  | 'childContentfulImageImageCaptionTextNode___parent___children'
  | 'childContentfulImageImageCaptionTextNode___parent___children___id'
  | 'childContentfulImageImageCaptionTextNode___parent___children___children'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___content'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___description'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___parent___internal___type'
  | 'childContentfulImageImageCaptionTextNode___children'
  | 'childContentfulImageImageCaptionTextNode___children___id'
  | 'childContentfulImageImageCaptionTextNode___children___parent___id'
  | 'childContentfulImageImageCaptionTextNode___children___parent___children'
  | 'childContentfulImageImageCaptionTextNode___children___children'
  | 'childContentfulImageImageCaptionTextNode___children___children___id'
  | 'childContentfulImageImageCaptionTextNode___children___children___children'
  | 'childContentfulImageImageCaptionTextNode___children___internal___content'
  | 'childContentfulImageImageCaptionTextNode___children___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___children___internal___description'
  | 'childContentfulImageImageCaptionTextNode___children___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___children___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___children___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___children___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___children___internal___type'
  | 'childContentfulImageImageCaptionTextNode___internal___content'
  | 'childContentfulImageImageCaptionTextNode___internal___contentDigest'
  | 'childContentfulImageImageCaptionTextNode___internal___description'
  | 'childContentfulImageImageCaptionTextNode___internal___fieldOwners'
  | 'childContentfulImageImageCaptionTextNode___internal___ignoreType'
  | 'childContentfulImageImageCaptionTextNode___internal___mediaType'
  | 'childContentfulImageImageCaptionTextNode___internal___owner'
  | 'childContentfulImageImageCaptionTextNode___internal___type'
  | 'childContentfulImageImageCaptionTextNode___imageCaption'
  | 'childContentfulImageImageCaptionTextNode___sys___type'
  | 'childContentfulImageImageCreditsTextNode___id'
  | 'childContentfulImageImageCreditsTextNode___parent___id'
  | 'childContentfulImageImageCreditsTextNode___parent___parent___id'
  | 'childContentfulImageImageCreditsTextNode___parent___parent___children'
  | 'childContentfulImageImageCreditsTextNode___parent___children'
  | 'childContentfulImageImageCreditsTextNode___parent___children___id'
  | 'childContentfulImageImageCreditsTextNode___parent___children___children'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___content'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___description'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___parent___internal___type'
  | 'childContentfulImageImageCreditsTextNode___children'
  | 'childContentfulImageImageCreditsTextNode___children___id'
  | 'childContentfulImageImageCreditsTextNode___children___parent___id'
  | 'childContentfulImageImageCreditsTextNode___children___parent___children'
  | 'childContentfulImageImageCreditsTextNode___children___children'
  | 'childContentfulImageImageCreditsTextNode___children___children___id'
  | 'childContentfulImageImageCreditsTextNode___children___children___children'
  | 'childContentfulImageImageCreditsTextNode___children___internal___content'
  | 'childContentfulImageImageCreditsTextNode___children___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___children___internal___description'
  | 'childContentfulImageImageCreditsTextNode___children___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___children___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___children___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___children___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___children___internal___type'
  | 'childContentfulImageImageCreditsTextNode___internal___content'
  | 'childContentfulImageImageCreditsTextNode___internal___contentDigest'
  | 'childContentfulImageImageCreditsTextNode___internal___description'
  | 'childContentfulImageImageCreditsTextNode___internal___fieldOwners'
  | 'childContentfulImageImageCreditsTextNode___internal___ignoreType'
  | 'childContentfulImageImageCreditsTextNode___internal___mediaType'
  | 'childContentfulImageImageCreditsTextNode___internal___owner'
  | 'childContentfulImageImageCreditsTextNode___internal___type'
  | 'childContentfulImageImageCreditsTextNode___imageCredits'
  | 'childContentfulImageImageCreditsTextNode___sys___type';

export type ContentfulImageFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
};

export type ContentfulImageFilterListInput = {
  elemMatch?: Maybe<ContentfulImageFilterInput>;
};

export type ContentfulImageFormat = 
  | 'NO_CHANGE'
  | 'JPG'
  | 'PNG'
  | 'WEBP';

export type ContentfulImageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageEdge>;
  nodes: Array<ContentfulImage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCaptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  imageCaption?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulImageImageCaptionTextNodeSys>;
};

export type ContentfulImageImageCaptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCaptionTextNodeEdge>;
  nodes: Array<ContentfulImageImageCaptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageImageCaptionTextNodeGroupConnection>;
};


export type ContentfulImageImageCaptionTextNodeConnectionDistinctArgs = {
  field: ContentfulImageImageCaptionTextNodeFieldsEnum;
};


export type ContentfulImageImageCaptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageImageCaptionTextNodeFieldsEnum;
};

export type ContentfulImageImageCaptionTextNodeEdge = {
  next?: Maybe<ContentfulImageImageCaptionTextNode>;
  node: ContentfulImageImageCaptionTextNode;
  previous?: Maybe<ContentfulImageImageCaptionTextNode>;
};

export type ContentfulImageImageCaptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'imageCaption'
  | 'sys___type';

export type ContentfulImageImageCaptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCaption?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulImageImageCaptionTextNodeSysFilterInput>;
};

export type ContentfulImageImageCaptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCaptionTextNodeEdge>;
  nodes: Array<ContentfulImageImageCaptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCaptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageImageCaptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageImageCaptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCaptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageImageCreditsTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  imageCredits?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulImageImageCreditsTextNodeSys>;
};

export type ContentfulImageImageCreditsTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCreditsTextNodeEdge>;
  nodes: Array<ContentfulImageImageCreditsTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulImageImageCreditsTextNodeGroupConnection>;
};


export type ContentfulImageImageCreditsTextNodeConnectionDistinctArgs = {
  field: ContentfulImageImageCreditsTextNodeFieldsEnum;
};


export type ContentfulImageImageCreditsTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulImageImageCreditsTextNodeFieldsEnum;
};

export type ContentfulImageImageCreditsTextNodeEdge = {
  next?: Maybe<ContentfulImageImageCreditsTextNode>;
  node: ContentfulImageImageCreditsTextNode;
  previous?: Maybe<ContentfulImageImageCreditsTextNode>;
};

export type ContentfulImageImageCreditsTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'imageCredits'
  | 'sys___type';

export type ContentfulImageImageCreditsTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCredits?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulImageImageCreditsTextNodeSysFilterInput>;
};

export type ContentfulImageImageCreditsTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulImageImageCreditsTextNodeEdge>;
  nodes: Array<ContentfulImageImageCreditsTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCreditsTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageImageCreditsTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageImageCreditsTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulImageImageCreditsTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulImageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulImageSys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulImageSysContentType>;
};

export type ContentfulImageSysContentType = {
  sys?: Maybe<ContentfulImageSysContentTypeSys>;
};

export type ContentfulImageSysContentTypeFilterInput = {
  sys?: Maybe<ContentfulImageSysContentTypeSysFilterInput>;
};

export type ContentfulImageSysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulImageSysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulImageSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulImageSysContentTypeFilterInput>;
};

export type ContentfulPhotoGallery = ContentfulReference & ContentfulEntry & Node & {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
  node_locale: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  date?: Maybe<Scalars['Date']>;
  location?: Maybe<ContentfulPhotoGalleryLocation>;
  author?: Maybe<ContentfulAuthor>;
  images?: Maybe<Array<Maybe<ContentfulImage>>>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  spaceId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  updatedAt?: Maybe<Scalars['Date']>;
  sys?: Maybe<ContentfulPhotoGallerySys>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
};


export type ContentfulPhotoGalleryDateArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPhotoGalleryCreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type ContentfulPhotoGalleryUpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryEdge>;
  nodes: Array<ContentfulPhotoGallery>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryGroupConnection>;
};


export type ContentfulPhotoGalleryConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryFieldsEnum;
};


export type ContentfulPhotoGalleryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryFieldsEnum;
};

export type ContentfulPhotoGalleryDescriptionTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  description?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeSys>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryDescriptionTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryDescriptionTextNodeGroupConnection>;
};


export type ContentfulPhotoGalleryDescriptionTextNodeConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum;
};


export type ContentfulPhotoGalleryDescriptionTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum;
};

export type ContentfulPhotoGalleryDescriptionTextNodeEdge = {
  next?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  node: ContentfulPhotoGalleryDescriptionTextNode;
  previous?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'description'
  | 'sys___type';

export type ContentfulPhotoGalleryDescriptionTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeSysFilterInput>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryDescriptionTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryDescriptionTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryDescriptionTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryDescriptionTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPhotoGalleryEdge = {
  next?: Maybe<ContentfulPhotoGallery>;
  node: ContentfulPhotoGallery;
  previous?: Maybe<ContentfulPhotoGallery>;
};

export type ContentfulPhotoGalleryFieldsEnum = 
  | 'contentful_id'
  | 'id'
  | 'node_locale'
  | 'slug'
  | 'tags'
  | 'date'
  | 'location___lon'
  | 'location___lat'
  | 'author___contentful_id'
  | 'author___id'
  | 'author___node_locale'
  | 'author___name'
  | 'author___twitterHandle'
  | 'author___photo_gallery'
  | 'author___photo_gallery___contentful_id'
  | 'author___photo_gallery___id'
  | 'author___photo_gallery___node_locale'
  | 'author___photo_gallery___slug'
  | 'author___photo_gallery___tags'
  | 'author___photo_gallery___date'
  | 'author___photo_gallery___location___lon'
  | 'author___photo_gallery___location___lat'
  | 'author___photo_gallery___author___contentful_id'
  | 'author___photo_gallery___author___id'
  | 'author___photo_gallery___author___node_locale'
  | 'author___photo_gallery___author___name'
  | 'author___photo_gallery___author___twitterHandle'
  | 'author___photo_gallery___author___photo_gallery'
  | 'author___photo_gallery___author___spaceId'
  | 'author___photo_gallery___author___createdAt'
  | 'author___photo_gallery___author___updatedAt'
  | 'author___photo_gallery___author___children'
  | 'author___photo_gallery___images'
  | 'author___photo_gallery___images___contentful_id'
  | 'author___photo_gallery___images___id'
  | 'author___photo_gallery___images___node_locale'
  | 'author___photo_gallery___images___title'
  | 'author___photo_gallery___images___photo_gallery'
  | 'author___photo_gallery___images___spaceId'
  | 'author___photo_gallery___images___createdAt'
  | 'author___photo_gallery___images___updatedAt'
  | 'author___photo_gallery___images___children'
  | 'author___photo_gallery___title___id'
  | 'author___photo_gallery___title___children'
  | 'author___photo_gallery___title___title'
  | 'author___photo_gallery___description___id'
  | 'author___photo_gallery___description___children'
  | 'author___photo_gallery___description___description'
  | 'author___photo_gallery___spaceId'
  | 'author___photo_gallery___createdAt'
  | 'author___photo_gallery___updatedAt'
  | 'author___photo_gallery___sys___type'
  | 'author___photo_gallery___sys___revision'
  | 'author___photo_gallery___parent___id'
  | 'author___photo_gallery___parent___children'
  | 'author___photo_gallery___children'
  | 'author___photo_gallery___children___id'
  | 'author___photo_gallery___children___children'
  | 'author___photo_gallery___internal___content'
  | 'author___photo_gallery___internal___contentDigest'
  | 'author___photo_gallery___internal___description'
  | 'author___photo_gallery___internal___fieldOwners'
  | 'author___photo_gallery___internal___ignoreType'
  | 'author___photo_gallery___internal___mediaType'
  | 'author___photo_gallery___internal___owner'
  | 'author___photo_gallery___internal___type'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'author___photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'author___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'author___biography___id'
  | 'author___biography___parent___id'
  | 'author___biography___parent___children'
  | 'author___biography___children'
  | 'author___biography___children___id'
  | 'author___biography___children___children'
  | 'author___biography___internal___content'
  | 'author___biography___internal___contentDigest'
  | 'author___biography___internal___description'
  | 'author___biography___internal___fieldOwners'
  | 'author___biography___internal___ignoreType'
  | 'author___biography___internal___mediaType'
  | 'author___biography___internal___owner'
  | 'author___biography___internal___type'
  | 'author___biography___biography'
  | 'author___biography___sys___type'
  | 'author___spaceId'
  | 'author___createdAt'
  | 'author___updatedAt'
  | 'author___sys___type'
  | 'author___sys___revision'
  | 'author___parent___id'
  | 'author___parent___parent___id'
  | 'author___parent___parent___children'
  | 'author___parent___children'
  | 'author___parent___children___id'
  | 'author___parent___children___children'
  | 'author___parent___internal___content'
  | 'author___parent___internal___contentDigest'
  | 'author___parent___internal___description'
  | 'author___parent___internal___fieldOwners'
  | 'author___parent___internal___ignoreType'
  | 'author___parent___internal___mediaType'
  | 'author___parent___internal___owner'
  | 'author___parent___internal___type'
  | 'author___children'
  | 'author___children___id'
  | 'author___children___parent___id'
  | 'author___children___parent___children'
  | 'author___children___children'
  | 'author___children___children___id'
  | 'author___children___children___children'
  | 'author___children___internal___content'
  | 'author___children___internal___contentDigest'
  | 'author___children___internal___description'
  | 'author___children___internal___fieldOwners'
  | 'author___children___internal___ignoreType'
  | 'author___children___internal___mediaType'
  | 'author___children___internal___owner'
  | 'author___children___internal___type'
  | 'author___internal___content'
  | 'author___internal___contentDigest'
  | 'author___internal___description'
  | 'author___internal___fieldOwners'
  | 'author___internal___ignoreType'
  | 'author___internal___mediaType'
  | 'author___internal___owner'
  | 'author___internal___type'
  | 'author___childContentfulAuthorBiographyTextNode___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___id'
  | 'author___childContentfulAuthorBiographyTextNode___parent___children'
  | 'author___childContentfulAuthorBiographyTextNode___children'
  | 'author___childContentfulAuthorBiographyTextNode___children___id'
  | 'author___childContentfulAuthorBiographyTextNode___children___children'
  | 'author___childContentfulAuthorBiographyTextNode___internal___content'
  | 'author___childContentfulAuthorBiographyTextNode___internal___contentDigest'
  | 'author___childContentfulAuthorBiographyTextNode___internal___description'
  | 'author___childContentfulAuthorBiographyTextNode___internal___fieldOwners'
  | 'author___childContentfulAuthorBiographyTextNode___internal___ignoreType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___mediaType'
  | 'author___childContentfulAuthorBiographyTextNode___internal___owner'
  | 'author___childContentfulAuthorBiographyTextNode___internal___type'
  | 'author___childContentfulAuthorBiographyTextNode___biography'
  | 'author___childContentfulAuthorBiographyTextNode___sys___type'
  | 'images'
  | 'images___contentful_id'
  | 'images___id'
  | 'images___node_locale'
  | 'images___title'
  | 'images___photo_gallery'
  | 'images___photo_gallery___contentful_id'
  | 'images___photo_gallery___id'
  | 'images___photo_gallery___node_locale'
  | 'images___photo_gallery___slug'
  | 'images___photo_gallery___tags'
  | 'images___photo_gallery___date'
  | 'images___photo_gallery___location___lon'
  | 'images___photo_gallery___location___lat'
  | 'images___photo_gallery___author___contentful_id'
  | 'images___photo_gallery___author___id'
  | 'images___photo_gallery___author___node_locale'
  | 'images___photo_gallery___author___name'
  | 'images___photo_gallery___author___twitterHandle'
  | 'images___photo_gallery___author___photo_gallery'
  | 'images___photo_gallery___author___spaceId'
  | 'images___photo_gallery___author___createdAt'
  | 'images___photo_gallery___author___updatedAt'
  | 'images___photo_gallery___author___children'
  | 'images___photo_gallery___images'
  | 'images___photo_gallery___images___contentful_id'
  | 'images___photo_gallery___images___id'
  | 'images___photo_gallery___images___node_locale'
  | 'images___photo_gallery___images___title'
  | 'images___photo_gallery___images___photo_gallery'
  | 'images___photo_gallery___images___spaceId'
  | 'images___photo_gallery___images___createdAt'
  | 'images___photo_gallery___images___updatedAt'
  | 'images___photo_gallery___images___children'
  | 'images___photo_gallery___title___id'
  | 'images___photo_gallery___title___children'
  | 'images___photo_gallery___title___title'
  | 'images___photo_gallery___description___id'
  | 'images___photo_gallery___description___children'
  | 'images___photo_gallery___description___description'
  | 'images___photo_gallery___spaceId'
  | 'images___photo_gallery___createdAt'
  | 'images___photo_gallery___updatedAt'
  | 'images___photo_gallery___sys___type'
  | 'images___photo_gallery___sys___revision'
  | 'images___photo_gallery___parent___id'
  | 'images___photo_gallery___parent___children'
  | 'images___photo_gallery___children'
  | 'images___photo_gallery___children___id'
  | 'images___photo_gallery___children___children'
  | 'images___photo_gallery___internal___content'
  | 'images___photo_gallery___internal___contentDigest'
  | 'images___photo_gallery___internal___description'
  | 'images___photo_gallery___internal___fieldOwners'
  | 'images___photo_gallery___internal___ignoreType'
  | 'images___photo_gallery___internal___mediaType'
  | 'images___photo_gallery___internal___owner'
  | 'images___photo_gallery___internal___type'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___id'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___children'
  | 'images___photo_gallery___childContentfulPhotoGalleryTitleTextNode___title'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'images___photo_gallery___childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'images___imageCaption___id'
  | 'images___imageCaption___parent___id'
  | 'images___imageCaption___parent___children'
  | 'images___imageCaption___children'
  | 'images___imageCaption___children___id'
  | 'images___imageCaption___children___children'
  | 'images___imageCaption___internal___content'
  | 'images___imageCaption___internal___contentDigest'
  | 'images___imageCaption___internal___description'
  | 'images___imageCaption___internal___fieldOwners'
  | 'images___imageCaption___internal___ignoreType'
  | 'images___imageCaption___internal___mediaType'
  | 'images___imageCaption___internal___owner'
  | 'images___imageCaption___internal___type'
  | 'images___imageCaption___imageCaption'
  | 'images___imageCaption___sys___type'
  | 'images___imageCredits___id'
  | 'images___imageCredits___parent___id'
  | 'images___imageCredits___parent___children'
  | 'images___imageCredits___children'
  | 'images___imageCredits___children___id'
  | 'images___imageCredits___children___children'
  | 'images___imageCredits___internal___content'
  | 'images___imageCredits___internal___contentDigest'
  | 'images___imageCredits___internal___description'
  | 'images___imageCredits___internal___fieldOwners'
  | 'images___imageCredits___internal___ignoreType'
  | 'images___imageCredits___internal___mediaType'
  | 'images___imageCredits___internal___owner'
  | 'images___imageCredits___internal___type'
  | 'images___imageCredits___imageCredits'
  | 'images___imageCredits___sys___type'
  | 'images___spaceId'
  | 'images___createdAt'
  | 'images___updatedAt'
  | 'images___sys___type'
  | 'images___sys___revision'
  | 'images___photo___contentful_id'
  | 'images___photo___id'
  | 'images___photo___spaceId'
  | 'images___photo___createdAt'
  | 'images___photo___updatedAt'
  | 'images___photo___file___url'
  | 'images___photo___file___fileName'
  | 'images___photo___file___contentType'
  | 'images___photo___title'
  | 'images___photo___description'
  | 'images___photo___node_locale'
  | 'images___photo___sys___type'
  | 'images___photo___sys___revision'
  | 'images___photo___fixed___base64'
  | 'images___photo___fixed___tracedSVG'
  | 'images___photo___fixed___aspectRatio'
  | 'images___photo___fixed___width'
  | 'images___photo___fixed___height'
  | 'images___photo___fixed___src'
  | 'images___photo___fixed___srcSet'
  | 'images___photo___fixed___srcWebp'
  | 'images___photo___fixed___srcSetWebp'
  | 'images___photo___resolutions___base64'
  | 'images___photo___resolutions___tracedSVG'
  | 'images___photo___resolutions___aspectRatio'
  | 'images___photo___resolutions___width'
  | 'images___photo___resolutions___height'
  | 'images___photo___resolutions___src'
  | 'images___photo___resolutions___srcSet'
  | 'images___photo___resolutions___srcWebp'
  | 'images___photo___resolutions___srcSetWebp'
  | 'images___photo___fluid___base64'
  | 'images___photo___fluid___tracedSVG'
  | 'images___photo___fluid___aspectRatio'
  | 'images___photo___fluid___src'
  | 'images___photo___fluid___srcSet'
  | 'images___photo___fluid___srcWebp'
  | 'images___photo___fluid___srcSetWebp'
  | 'images___photo___fluid___sizes'
  | 'images___photo___sizes___base64'
  | 'images___photo___sizes___tracedSVG'
  | 'images___photo___sizes___aspectRatio'
  | 'images___photo___sizes___src'
  | 'images___photo___sizes___srcSet'
  | 'images___photo___sizes___srcWebp'
  | 'images___photo___sizes___srcSetWebp'
  | 'images___photo___sizes___sizes'
  | 'images___photo___resize___base64'
  | 'images___photo___resize___tracedSVG'
  | 'images___photo___resize___src'
  | 'images___photo___resize___width'
  | 'images___photo___resize___height'
  | 'images___photo___resize___aspectRatio'
  | 'images___photo___parent___id'
  | 'images___photo___parent___children'
  | 'images___photo___children'
  | 'images___photo___children___id'
  | 'images___photo___children___children'
  | 'images___photo___internal___content'
  | 'images___photo___internal___contentDigest'
  | 'images___photo___internal___description'
  | 'images___photo___internal___fieldOwners'
  | 'images___photo___internal___ignoreType'
  | 'images___photo___internal___mediaType'
  | 'images___photo___internal___owner'
  | 'images___photo___internal___type'
  | 'images___parent___id'
  | 'images___parent___parent___id'
  | 'images___parent___parent___children'
  | 'images___parent___children'
  | 'images___parent___children___id'
  | 'images___parent___children___children'
  | 'images___parent___internal___content'
  | 'images___parent___internal___contentDigest'
  | 'images___parent___internal___description'
  | 'images___parent___internal___fieldOwners'
  | 'images___parent___internal___ignoreType'
  | 'images___parent___internal___mediaType'
  | 'images___parent___internal___owner'
  | 'images___parent___internal___type'
  | 'images___children'
  | 'images___children___id'
  | 'images___children___parent___id'
  | 'images___children___parent___children'
  | 'images___children___children'
  | 'images___children___children___id'
  | 'images___children___children___children'
  | 'images___children___internal___content'
  | 'images___children___internal___contentDigest'
  | 'images___children___internal___description'
  | 'images___children___internal___fieldOwners'
  | 'images___children___internal___ignoreType'
  | 'images___children___internal___mediaType'
  | 'images___children___internal___owner'
  | 'images___children___internal___type'
  | 'images___internal___content'
  | 'images___internal___contentDigest'
  | 'images___internal___description'
  | 'images___internal___fieldOwners'
  | 'images___internal___ignoreType'
  | 'images___internal___mediaType'
  | 'images___internal___owner'
  | 'images___internal___type'
  | 'images___childContentfulImageImageCaptionTextNode___id'
  | 'images___childContentfulImageImageCaptionTextNode___parent___id'
  | 'images___childContentfulImageImageCaptionTextNode___parent___children'
  | 'images___childContentfulImageImageCaptionTextNode___children'
  | 'images___childContentfulImageImageCaptionTextNode___children___id'
  | 'images___childContentfulImageImageCaptionTextNode___children___children'
  | 'images___childContentfulImageImageCaptionTextNode___internal___content'
  | 'images___childContentfulImageImageCaptionTextNode___internal___contentDigest'
  | 'images___childContentfulImageImageCaptionTextNode___internal___description'
  | 'images___childContentfulImageImageCaptionTextNode___internal___fieldOwners'
  | 'images___childContentfulImageImageCaptionTextNode___internal___ignoreType'
  | 'images___childContentfulImageImageCaptionTextNode___internal___mediaType'
  | 'images___childContentfulImageImageCaptionTextNode___internal___owner'
  | 'images___childContentfulImageImageCaptionTextNode___internal___type'
  | 'images___childContentfulImageImageCaptionTextNode___imageCaption'
  | 'images___childContentfulImageImageCaptionTextNode___sys___type'
  | 'images___childContentfulImageImageCreditsTextNode___id'
  | 'images___childContentfulImageImageCreditsTextNode___parent___id'
  | 'images___childContentfulImageImageCreditsTextNode___parent___children'
  | 'images___childContentfulImageImageCreditsTextNode___children'
  | 'images___childContentfulImageImageCreditsTextNode___children___id'
  | 'images___childContentfulImageImageCreditsTextNode___children___children'
  | 'images___childContentfulImageImageCreditsTextNode___internal___content'
  | 'images___childContentfulImageImageCreditsTextNode___internal___contentDigest'
  | 'images___childContentfulImageImageCreditsTextNode___internal___description'
  | 'images___childContentfulImageImageCreditsTextNode___internal___fieldOwners'
  | 'images___childContentfulImageImageCreditsTextNode___internal___ignoreType'
  | 'images___childContentfulImageImageCreditsTextNode___internal___mediaType'
  | 'images___childContentfulImageImageCreditsTextNode___internal___owner'
  | 'images___childContentfulImageImageCreditsTextNode___internal___type'
  | 'images___childContentfulImageImageCreditsTextNode___imageCredits'
  | 'images___childContentfulImageImageCreditsTextNode___sys___type'
  | 'title___id'
  | 'title___parent___id'
  | 'title___parent___parent___id'
  | 'title___parent___parent___children'
  | 'title___parent___children'
  | 'title___parent___children___id'
  | 'title___parent___children___children'
  | 'title___parent___internal___content'
  | 'title___parent___internal___contentDigest'
  | 'title___parent___internal___description'
  | 'title___parent___internal___fieldOwners'
  | 'title___parent___internal___ignoreType'
  | 'title___parent___internal___mediaType'
  | 'title___parent___internal___owner'
  | 'title___parent___internal___type'
  | 'title___children'
  | 'title___children___id'
  | 'title___children___parent___id'
  | 'title___children___parent___children'
  | 'title___children___children'
  | 'title___children___children___id'
  | 'title___children___children___children'
  | 'title___children___internal___content'
  | 'title___children___internal___contentDigest'
  | 'title___children___internal___description'
  | 'title___children___internal___fieldOwners'
  | 'title___children___internal___ignoreType'
  | 'title___children___internal___mediaType'
  | 'title___children___internal___owner'
  | 'title___children___internal___type'
  | 'title___internal___content'
  | 'title___internal___contentDigest'
  | 'title___internal___description'
  | 'title___internal___fieldOwners'
  | 'title___internal___ignoreType'
  | 'title___internal___mediaType'
  | 'title___internal___owner'
  | 'title___internal___type'
  | 'title___title'
  | 'title___sys___type'
  | 'description___id'
  | 'description___parent___id'
  | 'description___parent___parent___id'
  | 'description___parent___parent___children'
  | 'description___parent___children'
  | 'description___parent___children___id'
  | 'description___parent___children___children'
  | 'description___parent___internal___content'
  | 'description___parent___internal___contentDigest'
  | 'description___parent___internal___description'
  | 'description___parent___internal___fieldOwners'
  | 'description___parent___internal___ignoreType'
  | 'description___parent___internal___mediaType'
  | 'description___parent___internal___owner'
  | 'description___parent___internal___type'
  | 'description___children'
  | 'description___children___id'
  | 'description___children___parent___id'
  | 'description___children___parent___children'
  | 'description___children___children'
  | 'description___children___children___id'
  | 'description___children___children___children'
  | 'description___children___internal___content'
  | 'description___children___internal___contentDigest'
  | 'description___children___internal___description'
  | 'description___children___internal___fieldOwners'
  | 'description___children___internal___ignoreType'
  | 'description___children___internal___mediaType'
  | 'description___children___internal___owner'
  | 'description___children___internal___type'
  | 'description___internal___content'
  | 'description___internal___contentDigest'
  | 'description___internal___description'
  | 'description___internal___fieldOwners'
  | 'description___internal___ignoreType'
  | 'description___internal___mediaType'
  | 'description___internal___owner'
  | 'description___internal___type'
  | 'description___description'
  | 'description___sys___type'
  | 'spaceId'
  | 'createdAt'
  | 'updatedAt'
  | 'sys___type'
  | 'sys___revision'
  | 'sys___contentType___sys___type'
  | 'sys___contentType___sys___linkType'
  | 'sys___contentType___sys___id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___parent___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___parent___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___parent___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children___id'
  | 'childContentfulPhotoGalleryTitleTextNode___children___children___children'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___children___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___content'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___contentDigest'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___description'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___fieldOwners'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___ignoreType'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___mediaType'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___owner'
  | 'childContentfulPhotoGalleryTitleTextNode___internal___type'
  | 'childContentfulPhotoGalleryTitleTextNode___title'
  | 'childContentfulPhotoGalleryTitleTextNode___sys___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___parent___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___parent___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___parent___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children___id'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___children___children'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___children___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___content'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___contentDigest'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___fieldOwners'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___ignoreType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___mediaType'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___owner'
  | 'childContentfulPhotoGalleryDescriptionTextNode___internal___type'
  | 'childContentfulPhotoGalleryDescriptionTextNode___description'
  | 'childContentfulPhotoGalleryDescriptionTextNode___sys___type';

export type ContentfulPhotoGalleryFilterInput = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  location?: Maybe<ContentfulPhotoGalleryLocationFilterInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  images?: Maybe<ContentfulImageFilterListInput>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGallerySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
};

export type ContentfulPhotoGalleryFilterListInput = {
  elemMatch?: Maybe<ContentfulPhotoGalleryFilterInput>;
};

export type ContentfulPhotoGalleryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryEdge>;
  nodes: Array<ContentfulPhotoGallery>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryLocation = {
  lon?: Maybe<Scalars['Float']>;
  lat?: Maybe<Scalars['Float']>;
};

export type ContentfulPhotoGalleryLocationFilterInput = {
  lon?: Maybe<FloatQueryOperatorInput>;
  lat?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulPhotoGallerySortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPhotoGallerySys = {
  type?: Maybe<Scalars['String']>;
  revision?: Maybe<Scalars['Int']>;
  contentType?: Maybe<ContentfulPhotoGallerySysContentType>;
};

export type ContentfulPhotoGallerySysContentType = {
  sys?: Maybe<ContentfulPhotoGallerySysContentTypeSys>;
};

export type ContentfulPhotoGallerySysContentTypeFilterInput = {
  sys?: Maybe<ContentfulPhotoGallerySysContentTypeSysFilterInput>;
};

export type ContentfulPhotoGallerySysContentTypeSys = {
  type?: Maybe<Scalars['String']>;
  linkType?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGallerySysContentTypeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  linkType?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulPhotoGallerySysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
  revision?: Maybe<IntQueryOperatorInput>;
  contentType?: Maybe<ContentfulPhotoGallerySysContentTypeFilterInput>;
};

export type ContentfulPhotoGalleryTitleTextNode = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  title?: Maybe<Scalars['String']>;
  sys?: Maybe<ContentfulPhotoGalleryTitleTextNodeSys>;
};

export type ContentfulPhotoGalleryTitleTextNodeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryTitleTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryTitleTextNode>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<ContentfulPhotoGalleryTitleTextNodeGroupConnection>;
};


export type ContentfulPhotoGalleryTitleTextNodeConnectionDistinctArgs = {
  field: ContentfulPhotoGalleryTitleTextNodeFieldsEnum;
};


export type ContentfulPhotoGalleryTitleTextNodeConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ContentfulPhotoGalleryTitleTextNodeFieldsEnum;
};

export type ContentfulPhotoGalleryTitleTextNodeEdge = {
  next?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  node: ContentfulPhotoGalleryTitleTextNode;
  previous?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
};

export type ContentfulPhotoGalleryTitleTextNodeFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'title'
  | 'sys___type';

export type ContentfulPhotoGalleryTitleTextNodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGalleryTitleTextNodeSysFilterInput>;
};

export type ContentfulPhotoGalleryTitleTextNodeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ContentfulPhotoGalleryTitleTextNodeEdge>;
  nodes: Array<ContentfulPhotoGalleryTitleTextNode>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryTitleTextNodeSortInput = {
  fields?: Maybe<Array<Maybe<ContentfulPhotoGalleryTitleTextNodeFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type ContentfulPhotoGalleryTitleTextNodeSys = {
  type?: Maybe<Scalars['String']>;
};

export type ContentfulPhotoGalleryTitleTextNodeSysFilterInput = {
  type?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulReference = {
  contentful_id: Scalars['String'];
  id: Scalars['ID'];
};

export type ContentfulResize = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  src?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
};

export type ContentfulResizeFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
};

export type ContentfulResolutions = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
};

export type ContentfulResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
};

export type ContentfulSizes = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
};

export type ContentfulSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type FileFieldsEnum = 
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageResizingBehavior = 
  | 'NO_CHANGE'
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  | 'PAD'
  /** Crop a part of the original image to match the specified size. */
  | 'CROP'
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  | 'FILL'
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  | 'THUMB'
  /** Scale the image regardless of the original aspect ratio. */
  | 'SCALE';

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Query = {
  contentfulEntry?: Maybe<ContentfulEntry>;
  allContentfulEntry: ContentfulEntryConnection;
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  contentfulAsset?: Maybe<ContentfulAsset>;
  allContentfulAsset: ContentfulAssetConnection;
  contentfulImage?: Maybe<ContentfulImage>;
  allContentfulImage: ContentfulImageConnection;
  contentfulPhotoGallery?: Maybe<ContentfulPhotoGallery>;
  allContentfulPhotoGallery: ContentfulPhotoGalleryConnection;
  contentfulAuthor?: Maybe<ContentfulAuthor>;
  allContentfulAuthor: ContentfulAuthorConnection;
  contentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNode>;
  allContentfulAuthorBiographyTextNode: ContentfulAuthorBiographyTextNodeConnection;
  contentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNode>;
  allContentfulPhotoGalleryDescriptionTextNode: ContentfulPhotoGalleryDescriptionTextNodeConnection;
  contentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNode>;
  allContentfulPhotoGalleryTitleTextNode: ContentfulPhotoGalleryTitleTextNodeConnection;
  contentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNode>;
  allContentfulImageImageCreditsTextNode: ContentfulImageImageCreditsTextNodeConnection;
  contentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNode>;
  allContentfulImageImageCaptionTextNode: ContentfulImageImageCaptionTextNodeConnection;
  contentfulContentType?: Maybe<ContentfulContentType>;
  allContentfulContentType: ContentfulContentTypeConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
};


export type QueryContentfulEntryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllContentfulEntryArgs = {
  filter?: Maybe<ContentfulEntryFilterInput>;
  sort?: Maybe<ContentfulEntrySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAssetArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  file?: Maybe<ContentfulAssetFileFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAssetSysFilterInput>;
  fixed?: Maybe<ContentfulFixedFilterInput>;
  resolutions?: Maybe<ContentfulResolutionsFilterInput>;
  fluid?: Maybe<ContentfulFluidFilterInput>;
  sizes?: Maybe<ContentfulSizesFilterInput>;
  resize?: Maybe<ContentfulResizeFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllContentfulAssetArgs = {
  filter?: Maybe<ContentfulAssetFilterInput>;
  sort?: Maybe<ContentfulAssetSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  imageCaption?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  imageCredits?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulImageSysFilterInput>;
  photo?: Maybe<ContentfulAssetFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulImageImageCaptionTextNode?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  childContentfulImageImageCreditsTextNode?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
};


export type QueryAllContentfulImageArgs = {
  filter?: Maybe<ContentfulImageFilterInput>;
  sort?: Maybe<ContentfulImageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  tags?: Maybe<StringQueryOperatorInput>;
  date?: Maybe<DateQueryOperatorInput>;
  location?: Maybe<ContentfulPhotoGalleryLocationFilterInput>;
  author?: Maybe<ContentfulAuthorFilterInput>;
  images?: Maybe<ContentfulImageFilterListInput>;
  title?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  description?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGallerySysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulPhotoGalleryTitleTextNode?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  childContentfulPhotoGalleryDescriptionTextNode?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
};


export type QueryAllContentfulPhotoGalleryArgs = {
  filter?: Maybe<ContentfulPhotoGalleryFilterInput>;
  sort?: Maybe<ContentfulPhotoGallerySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorArgs = {
  contentful_id?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  node_locale?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  twitterHandle?: Maybe<StringQueryOperatorInput>;
  photo_gallery?: Maybe<ContentfulPhotoGalleryFilterListInput>;
  biography?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  createdAt?: Maybe<DateQueryOperatorInput>;
  updatedAt?: Maybe<DateQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorSysFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  childContentfulAuthorBiographyTextNode?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
};


export type QueryAllContentfulAuthorArgs = {
  filter?: Maybe<ContentfulAuthorFilterInput>;
  sort?: Maybe<ContentfulAuthorSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulAuthorBiographyTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  biography?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulAuthorBiographyTextNodeSysFilterInput>;
};


export type QueryAllContentfulAuthorBiographyTextNodeArgs = {
  filter?: Maybe<ContentfulAuthorBiographyTextNodeFilterInput>;
  sort?: Maybe<ContentfulAuthorBiographyTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryDescriptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  description?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulPhotoGalleryDescriptionTextNodeArgs = {
  filter?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulPhotoGalleryDescriptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulPhotoGalleryTitleTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulPhotoGalleryTitleTextNodeSysFilterInput>;
};


export type QueryAllContentfulPhotoGalleryTitleTextNodeArgs = {
  filter?: Maybe<ContentfulPhotoGalleryTitleTextNodeFilterInput>;
  sort?: Maybe<ContentfulPhotoGalleryTitleTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageImageCreditsTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCredits?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulImageImageCreditsTextNodeSysFilterInput>;
};


export type QueryAllContentfulImageImageCreditsTextNodeArgs = {
  filter?: Maybe<ContentfulImageImageCreditsTextNodeFilterInput>;
  sort?: Maybe<ContentfulImageImageCreditsTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulImageImageCaptionTextNodeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  imageCaption?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulImageImageCaptionTextNodeSysFilterInput>;
};


export type QueryAllContentfulImageImageCaptionTextNodeArgs = {
  filter?: Maybe<ContentfulImageImageCaptionTextNodeFilterInput>;
  sort?: Maybe<ContentfulImageImageCaptionTextNodeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryContentfulContentTypeArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  name?: Maybe<StringQueryOperatorInput>;
  displayField?: Maybe<StringQueryOperatorInput>;
  sys?: Maybe<ContentfulContentTypeSysFilterInput>;
};


export type QueryAllContentfulContentTypeArgs = {
  filter?: Maybe<ContentfulContentTypeFilterInput>;
  sort?: Maybe<ContentfulContentTypeSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'buildTime';

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldsEnum = 
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___testBoolean'
  | 'siteMetadata___testString'
  | 'siteMetadata___testNumber'
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type';

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
  componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum = 
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'isCreatedByStatefulCreatePages'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___documentPaths'
  | 'pluginCreator___pluginOptions___spaceId'
  | 'pluginCreator___pluginOptions___accessToken'
  | 'pluginCreator___pluginOptions___host'
  | 'pluginCreator___pluginOptions___environment'
  | 'pluginCreator___pluginOptions___downloadLocal'
  | 'pluginCreator___pluginOptions___forceFullSync'
  | 'pluginCreator___pluginOptions___pageLimit'
  | 'pluginCreator___pluginOptions___assetDownloadWorkers'
  | 'pluginCreator___pluginOptions___useNameForId'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'
  | 'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
  componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum = 
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___documentPaths'
  | 'pluginOptions___spaceId'
  | 'pluginOptions___accessToken'
  | 'pluginOptions___host'
  | 'pluginOptions___environment'
  | 'pluginOptions___downloadLocal'
  | 'pluginOptions___forceFullSync'
  | 'pluginOptions___pageLimit'
  | 'pluginOptions___assetDownloadWorkers'
  | 'pluginOptions___useNameForId'
  | 'pluginOptions___path'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  author?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  spaceId?: Maybe<Scalars['String']>;
  accessToken?: Maybe<Scalars['String']>;
  host?: Maybe<Scalars['String']>;
  environment?: Maybe<Scalars['String']>;
  downloadLocal?: Maybe<Scalars['Boolean']>;
  forceFullSync?: Maybe<Scalars['Boolean']>;
  pageLimit?: Maybe<Scalars['Int']>;
  assetDownloadWorkers?: Maybe<Scalars['Int']>;
  useNameForId?: Maybe<Scalars['Boolean']>;
  path?: Maybe<Scalars['String']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  documentPaths?: Maybe<StringQueryOperatorInput>;
  spaceId?: Maybe<StringQueryOperatorInput>;
  accessToken?: Maybe<StringQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  environment?: Maybe<StringQueryOperatorInput>;
  downloadLocal?: Maybe<BooleanQueryOperatorInput>;
  forceFullSync?: Maybe<BooleanQueryOperatorInput>;
  pageLimit?: Maybe<IntQueryOperatorInput>;
  assetDownloadWorkers?: Maybe<IntQueryOperatorInput>;
  useNameForId?: Maybe<BooleanQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  testBoolean?: Maybe<Scalars['Boolean']>;
  testString?: Maybe<Scalars['String']>;
  testNumber?: Maybe<Scalars['Int']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  testBoolean?: Maybe<BooleanQueryOperatorInput>;
  testString?: Maybe<StringQueryOperatorInput>;
  testNumber?: Maybe<IntQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 
  | 'ASC'
  | 'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = { allContentfulImage: { edges: Array<{ node: { photo?: Maybe<(
          Pick<ContentfulAsset, 'description' | 'title'>
          & { file?: Maybe<Pick<ContentfulAssetFile, 'url' | 'fileName' | 'contentType'>> }
        )> } }> } };
