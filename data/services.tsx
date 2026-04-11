import React from 'react';
import {
    GraduationCapIcon,
    GlobeIcon,
    DocumentCheckIcon,
    PlaneIcon
} from '../components/Icons';
import { Service } from '../types';

export const services: Service[] = [
    {
        id: 1,
        title: "Career Advising",
        description: "Honest and transparent guidance to help students make the right career choices based on their background and aptitude.",
        icon: <GraduationCapIcon className="w-8 h-8 text-accent-500" />
    },
    {
        id: 2,
        title: "Admission Counseling",
        description: "Complete assistance with application documentation, offer letter processing, and SOP/LOR preparation.",
        icon: <GlobeIcon className="w-8 h-8 text-accent-500" />
    },
    {
        id: 3,
        title: "Visa Counseling",
        description: "Error-free visa application services, financial documentation guidance, and interview preparation.",
        icon: <DocumentCheckIcon className="w-8 h-8 text-accent-500" />
    },
    {
        id: 4,
        title: "Travel & Accommodation",
        description: "Assistance with travel bookings, airport pickup services, and finding suitable accommodation abroad.",
        icon: <PlaneIcon className="w-8 h-8 text-accent-500" />
    }
];
