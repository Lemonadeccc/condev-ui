import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../modal/markdown'

export default function Page() {
  return <Catalog items={catalogList} />
}

