import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/kiarash')({
  beforeLoad: () => { throw redirect({ to: '/kiarash-pahlevani', statusCode: 301 }); },
});
