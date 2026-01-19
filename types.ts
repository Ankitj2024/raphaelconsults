import React from 'react';

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Destination {
  id: number;
  country: string;
  universities: number;
  image: string;
  description: string;
  universityList?: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  university: string;
  text: string;
  image: string;
}