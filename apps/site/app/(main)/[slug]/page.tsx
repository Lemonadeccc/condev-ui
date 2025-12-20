import dynamic from 'next/dynamic'
import React from 'react'

const components: Record<string, React.ComponentType<any>> = {
  button: dynamic(() => import('../_content/Button')),
  checkbox: dynamic(() => import('../_content/Checkbox')),
  grid: dynamic(() => import('../_content/Grid')),
  link: dynamic(() => import('../_content/Link')),
  modal: dynamic(() => import('../_content/Modal')),
  radio: dynamic(() => import('../_content/Radio')),
  toast: dynamic(() => import('../_content/Toast')),
  verticalmenu: dynamic(() => import('../_content/VerticalMenu')),
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const Component = components[slug.toLowerCase()]

  if (!Component) {
    return (
      <div className='text-3xl font-bold capitalize'>
        empty component
      </div>
    )
  }

  return <Component />
}
