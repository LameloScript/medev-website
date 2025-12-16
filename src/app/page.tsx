import { permanentRedirect } from 'next/navigation'

export default function RootPage() {
  // Permanent redirect to French version
  permanentRedirect('/fr')
}
