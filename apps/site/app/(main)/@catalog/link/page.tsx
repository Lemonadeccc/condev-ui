import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../link/markdown'

export default function Page() {
  return <Catalog items={catalogList} />
}

