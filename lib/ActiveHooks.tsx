'use client';

import { useActiveOnMount } from '@/hooks/useActiveOnMount';
import { useActiveOnView } from '@/hooks/useActiveOnView';

export default function ActiveHooks() {
  useActiveOnMount();
  useActiveOnView();
  return null;
}