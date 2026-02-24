import type { Meta, StoryObj } from '@storybook/react-vite'

import { Timeline } from './Timeline'
import { Button } from '../Button'
import { Pencil, Trash2 } from '../../icons/Lucide'

const meta: Meta<typeof Timeline> = {
  title: 'components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
}

export default meta

type Story = StoryObj<typeof Timeline>

export const Playground: Story = {
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'Lead Frontend Developer',
          description: 'ТехноКит Групп',
          content: (
            <ul style={{ margin: 0, paddingLeft: 20 }}>
              <li>Руководство командой из 12 разработчиков</li>
              <li>Перевод основного продукта на микрофронтенд архитектуру</li>
              <li>Оптимизация Core Web Vitals на 40%</li>
            </ul>
          ),
        },
        {
          title: 'Senior Frontend Engineer',
          description: 'Глобал Софт',
          content:
            'Разработка внутреннего BI-инструмента. Внедрение дизайн-системы и CI/CD процессов для фронтенда.',
        },
        {
          title: 'Frontend Developer',
          description: 'Стартап Медиа',
          content: 'Разработка SPA на React. Интеграция с REST и GraphQL API.',
        },
      ]}
    />
  ),
}

export const Education: Story = {
  name: 'Example: Education',
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'MSc Computer Science',
          description: 'MIT — 2020–2022',
          content: 'Thesis: Distributed Systems for Real-Time Data Processing',
        },
        {
          title: 'BSc Software Engineering',
          description: 'Stanford University — 2016–2020',
          content: "Dean's List, GPA 3.9/4.0",
        },
      ]}
    />
  ),
}

export const ActivityLog: Story = {
  name: 'Example: Activity Log',
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'Deployment completed',
          description: 'v2.4.1 — 2 hours ago',
          content: 'Production deployment to 3 regions. All health checks passed.',
        },
        {
          title: 'Pull request merged',
          description: '#482 — 5 hours ago',
          content: 'feat: add user notification preferences',
        },
        {
          title: 'Issue resolved',
          description: '#179 — yesterday',
          content: 'Fixed memory leak in WebSocket connection handler.',
        },
        {
          title: 'Release published',
          description: 'v2.4.0 — 3 days ago',
        },
      ]}
    />
  ),
}

export const TitleOnly: Story = {
  render: () => (
    <Timeline
      style={{ maxWidth: 400 }}
      items={[
        { title: 'Order placed' },
        { title: 'Payment confirmed' },
        { title: 'Shipped' },
        { title: 'Delivered' },
      ]}
    />
  ),
}

export const WithDescription: Story = {
  name: 'Title + Description',
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        { title: 'Step 1: Register', description: 'Create your account' },
        { title: 'Step 2: Verify', description: 'Confirm your email address' },
        { title: 'Step 3: Setup', description: 'Configure your workspace' },
        { title: 'Step 4: Start', description: 'Invite your team and begin' },
      ]}
    />
  ),
}

export const RichContent: Story = {
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'Q4 2025',
          description: 'Product Roadmap',
          content: (
            <div>
              <p style={{ margin: '0 0 8px' }}>Key deliverables:</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>Design system v2.0</li>
                <li>Performance monitoring dashboard</li>
                <li>Mobile app beta launch</li>
              </ul>
            </div>
          ),
        },
        {
          title: 'Q3 2025',
          description: 'Product Roadmap',
          content: (
            <div>
              <p style={{ margin: '0 0 8px' }}>Completed:</p>
              <ul style={{ margin: 0, paddingLeft: 20 }}>
                <li>API v3 migration</li>
                <li>SSO integration</li>
              </ul>
            </div>
          ),
        },
      ]}
    />
  ),
}

export const WithActions: Story = {
  name: 'With Actions',
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'Lead Frontend Developer',
          description: 'ТехноКит Групп — 2023–Present',
          content:
            'Руководство командой из 12 разработчиков. Перевод на микрофронтенд архитектуру.',
          actions: (
            <>
              <Button variant="transparent" size="compact" icon={<Pencil size={14} />} />
              <Button variant="transparent" size="compact" icon={<Trash2 size={14} />} />
            </>
          ),
        },
        {
          title: 'Senior Frontend Engineer',
          description: 'Глобал Софт — 2021–2023',
          content: 'Разработка внутреннего BI-инструмента.',
          actions: (
            <>
              <Button variant="transparent" size="compact" icon={<Pencil size={14} />} />
              <Button variant="transparent" size="compact" icon={<Trash2 size={14} />} />
            </>
          ),
        },
        {
          title: 'Frontend Developer',
          description: 'Стартап Медиа — 2019–2021',
          actions: (
            <>
              <Button variant="transparent" size="compact" icon={<Pencil size={14} />} />
              <Button variant="transparent" size="compact" icon={<Trash2 size={14} />} />
            </>
          ),
        },
      ]}
    />
  ),
}

export const SingleItem: Story = {
  render: () => (
    <Timeline
      style={{ maxWidth: 500 }}
      items={[
        {
          title: 'Project started',
          description: 'January 2025',
          content: 'Initial commit and project setup.',
        },
      ]}
    />
  ),
}
