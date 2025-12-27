import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../checkbox/markdown/read'

export default function Page() {
  return <Catalog items={catalogList} />
}
