import type { Schema, Attribute } from '@strapi/strapi';

export interface DataSocialLinks extends Schema.Component {
  collectionName: 'components_data_social_links';
  info: {
    displayName: 'Social Links';
    icon: 'oneToMany';
  };
  attributes: {
    instagram: Attribute.String;
    facebook: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'data.social-links': DataSocialLinks;
    }
  }
}
