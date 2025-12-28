import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../radio/markdown/read'

export default function Page() {
  return <Catalog items={catalogList} />
}

