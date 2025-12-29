import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../toast/markdown'

export default function Page() {
  return <Catalog items={catalogList} />
}

