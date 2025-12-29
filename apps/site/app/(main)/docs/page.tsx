import Link from 'next/link'

const components = [
  {
    slug: 'alert',
    title: 'Alert',
    description: '提示、确认与信息反馈',
  },
  {
    slug: 'button',
    title: 'Button',
    description: '按钮形态、图标、状态与尺寸',
  },
  {
    slug: 'checkbox',
    title: 'Checkbox',
    description: '勾选控制与表单组合',
  },
  {
    slug: 'grid',
    title: 'Grid',
    description: '栅格布局与响应式排版',
  },
  {
    slug: 'link',
    title: 'Link',
    description: '链接交互与可访问性',
  },
  {
    slug: 'modal',
    title: 'Modal',
    description: '对话框、遮罩与焦点管理',
  },
  {
    slug: 'radio',
    title: 'Radio',
    description: '单选、单选组与表单校验',
  },
  {
    slug: 'toast',
    title: 'Toast',
    description: '轻提示与通知反馈',
  },
  {
    slug: 'verticalmenu',
    title: 'VerticalMenu',
    description: '垂直菜单与层级导航',
  },
] as const

export default function DocsPage() {
  return (
    <div className="min-w-0 py-4">
      <h1 className="text-4xl font-bold">文档</h1>
      <p className="mt-4 text-white/80 leading-7">
        condev-ui 是一套面向 React 的 Headless 组件库：提供交互与能力，不绑定具体视觉样式，方便你用 Tailwind
        等方式快速落地一致的设计体系。通过左侧菜单浏览组件，或从下方入口快速开始。
      </p>

      <h2 className="mt-10 text-2xl font-semibold">组件</h2>
      <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
        {components.map(({ slug, title, description }) => (
          <li key={slug}>
            <Link
              href={`/${slug}`}
              className="block rounded-md border border-white/10 px-4 py-3 hover:bg-white/5 transition-colors"
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="font-medium">{title}</span>
                <span className="text-xs text-white/50">/{slug}</span>
              </div>
              <div className="mt-1 text-sm text-white/70">{description}</div>
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-2xl font-semibold">开始使用</h2>
      <div className="mt-4 text-white/70">在你的项目中安装：</div>
      <pre className="mt-2 overflow-auto rounded-md border border-white/10 bg-black/40 p-3 text-white/90">
        <code>{`pnpm add @condev-ui/ui`}</code>
      </pre>
      <div className="mt-4 rounded-md border border-white/10 bg-white/5 p-4 text-sm text-white/80">
        <div className="text-white/80">本仓库本地开发：</div>
        <pre className="mt-3 overflow-auto rounded-md border border-white/10 bg-black/40 p-3 text-white/90">
          <code>{`pnpm i\npnpm dev:site`}</code>
        </pre>
        <div className="mt-4 text-white/70">仅调试组件包构建：</div>
        <pre className="mt-2 overflow-auto rounded-md border border-white/10 bg-black/40 p-3 text-white/90">
          <code>{`pnpm dev:ui`}</code>
        </pre>

      </div>
    </div>
  )
}
