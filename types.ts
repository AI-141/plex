import { LucideIcon } from 'lucide-react';

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface MetricItem {
  value: string;
  description: string;
}

export interface NavLink {
  label: string;
  href: string;
}