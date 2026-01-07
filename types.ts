import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export interface Store {
  name: string;
  address: string;
  phone: string;
  established: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  brands: string[];
  items: string[];
  image: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Value {
  title: string;
  description: string;
}

export interface Promise {
  title: string;
  description: string;
}
