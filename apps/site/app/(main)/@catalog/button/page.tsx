import { Catalog } from '@/app/_components/catalog'

import { catalogList } from '../../button/markdown/read'

export default function Page() {
  return <Catalog items={catalogList} />
}
