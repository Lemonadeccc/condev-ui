import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../grid/markdown'

export default function Page() {
  return <Catalog items={catalogList} />
}
