import type { Meta, StoryObj } from '@storybook/react-vite'

import { StepLog as StepLogComponent } from './StepLog'
import { type StepLogItem } from './types'

const ciSteps: StepLogItem[] = [
  {
    value: 'setup',
    title: 'Set up job',
    status: 'success',
    duration: '1s',
    lines: [
      { line: 1, text: "Current runner version: '2.331.0'" },
      { line: 2, text: 'Operating System: Ubuntu 22.04.5 LTS' },
      { line: 3, text: 'Runner Image: ubuntu-22.04' },
      { line: 4, text: 'Prepare workflow directory' },
      { line: 5, text: 'Prepare all required actions' },
    ],
  },
  {
    value: 'checkout',
    title: 'Checkout',
    status: 'success',
    duration: '1s',
    lines: [
      { line: 1, text: 'Run actions/checkout@v4' },
      { line: 2, text: 'Syncing repository: vacano-house/vacano-ui' },
      { line: 3, text: "Getting Git version info: git version 2.43.0'" },
      { line: 4, text: 'Deleting the contents of /home/runner/work/vacano-ui' },
      { line: 5, text: 'Initializing the repository' },
      { line: 6, text: 'Setting up auth' },
      { line: 7, text: 'Fetching the repository' },
      { line: 8, text: 'Checking out the ref' },
    ],
  },
  {
    value: 'setup-pnpm',
    title: 'Setup pnpm',
    status: 'success',
    duration: '1s',
    lines: [
      { line: 1, text: 'Run pnpm/action-setup@v4' },
      { line: 2, text: '/usr/local/bin/pnpm install --global pnpm' },
      { line: 3, text: 'Packages: +1' },
      { line: 4, text: 'Progress: resolved 1, reused 1, downloaded 0, added 1, done' },
    ],
  },
  {
    value: 'install',
    title: 'Install dependencies',
    status: 'success',
    duration: '2s',
    lines: [
      { line: 1, text: 'Run pnpm install --frozen-lockfile' },
      { line: 2, text: 'Lockfile is up to date, resolution step is skipped' },
      { line: 3, text: 'Progress: resolved 1, reused 0, downloaded 0, added 0' },
      { line: 4, text: 'Packages: +658' },
      { line: 5, text: '++++++++++++++++++++++++++++++++++++++++++++++++++++++' },
      { line: 6, text: 'Progress: resolved 658, reused 658, downloaded 0, added 658, done' },
      { line: 7, text: '' },
      { line: 8, text: 'dependencies:' },
      { line: 9, text: '+ @emotion/styled 11.14.1' },
      { line: 10, text: '+ clsx 2.1.1' },
      { line: 11, text: '+ react-hook-form 7.71.2' },
    ],
  },
  {
    value: 'typecheck',
    title: 'Run type check',
    status: 'success',
    duration: '21s',
    lines: [
      { line: 1, text: 'Run pnpm typecheck' },
      { line: 2, text: '> @vacano/ui@1.14.0 typecheck' },
      { line: 3, text: '> tsc --noEmit' },
    ],
  },
  {
    value: 'lint',
    title: 'Run lint',
    status: 'success',
    duration: '10s',
    lines: [
      { line: 1, text: 'Run pnpm lint' },
      { line: 2, text: '> @vacano/ui@1.14.0 lint' },
      { line: 3, text: '> eslint .' },
    ],
  },
  {
    value: 'build',
    title: 'Build library',
    status: 'success',
    duration: '33s',
    lines: [
      { line: 1, text: 'Run pnpm build' },
      { line: 2, text: '> @vacano/ui@1.14.0 build' },
      { line: 3, text: '> vite build' },
      { line: 4, text: '' },
      { line: 5, text: 'vite v6.4.1 building for production...' },
      { line: 6, text: 'transforming...' },
      { line: 7, text: '✓ 2284 modules transformed.' },
      { line: 8, text: '✓ built in 19.38s' },
    ],
  },
  {
    value: 'publish',
    title: 'Publish to npm',
    status: 'success',
    duration: '5s',
    lines: [
      { line: 1, text: 'Run pnpm publish --access public --no-git-checks' },
      { line: 2, text: 'npm notice' },
      { line: 3, text: 'npm notice Publishing to https://registry.npmjs.org/' },
      { line: 4, text: '+ @vacano/ui@1.14.0' },
    ],
  },
]

const failedSteps: StepLogItem[] = [
  {
    value: 'install',
    title: 'Install dependencies',
    status: 'success',
    duration: '3s',
    lines: [
      { line: 1, text: 'Run pnpm install --frozen-lockfile' },
      { line: 2, text: 'Packages: +658' },
      { line: 3, text: 'Progress: resolved 658, reused 658, downloaded 0, added 658, done' },
    ],
  },
  {
    value: 'typecheck',
    title: 'Run type check',
    status: 'error',
    duration: '8s',
    lines: [
      { line: 1, text: 'Run pnpm typecheck' },
      { line: 2, text: '> tsc --noEmit' },
      { line: 3, text: '' },
      {
        line: 4,
        text: "src/components/Input/Input.tsx(42,5): error TS2322: Type 'string' is not assignable to type 'number'.",
      },
      {
        line: 5,
        text: "src/components/Select/Select.tsx(18,3): error TS2741: Property 'onChange' is missing.",
      },
      { line: 6, text: '' },
      { line: 7, text: 'Found 2 errors.' },
      { line: 8, text: '' },
      { line: 9, text: 'Process completed with exit code 2.' },
    ],
  },
  {
    value: 'lint',
    title: 'Run lint',
    status: 'pending',
    lines: [],
  },
  {
    value: 'build',
    title: 'Build library',
    status: 'pending',
    lines: [],
  },
]

const deploySteps: StepLogItem[] = [
  {
    value: 'pull',
    title: 'Pull latest changes',
    status: 'success',
    duration: '2s',
    lines: [
      { line: 1, text: 'git pull origin main' },
      { line: 2, text: 'Already up to date.' },
    ],
  },
  {
    value: 'deps',
    title: 'Install dependencies',
    status: 'success',
    duration: '12s',
    lines: [
      { line: 1, text: 'pnpm install --frozen-lockfile' },
      { line: 2, text: 'Packages: +320' },
    ],
  },
  {
    value: 'build',
    title: 'Build application',
    status: 'running',
    lines: [
      { line: 1, text: 'pnpm build' },
      { line: 2, text: 'vite v6.4.1 building for production...' },
      { line: 3, text: 'transforming...' },
    ],
  },
  { value: 'deploy', title: 'Deploy to server', status: 'pending', lines: [] },
  { value: 'health', title: 'Health check', status: 'pending', lines: [] },
]

const meta: Meta<typeof StepLogComponent> = {
  title: 'components/StepLog',
  component: StepLogComponent,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof StepLogComponent>

export const Playground: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <StepLogComponent steps={ciSteps} defaultValue={['install']} />
    </div>
  ),
}

export const AllCollapsed: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <StepLogComponent steps={ciSteps} />
    </div>
  ),
}

export const FailedBuild: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <StepLogComponent steps={failedSteps} defaultValue={['typecheck']} />
    </div>
  ),
}

export const DeployInProgress: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <StepLogComponent steps={deploySteps} defaultValue={['build']} />
    </div>
  ),
}

export const SingleStep: Story = {
  render: () => (
    <div style={{ width: 700 }}>
      <StepLogComponent
        steps={[
          {
            value: 'run',
            title: 'Run tests',
            status: 'success',
            duration: '45s',
            lines: [
              { line: 1, text: 'vitest run' },
              { line: 2, text: '' },
              { line: 3, text: ' ✓ src/utils.test.ts (5 tests) 12ms' },
              { line: 4, text: ' ✓ src/helpers.test.ts (3 tests) 8ms' },
              { line: 5, text: '' },
              { line: 6, text: ' Test Files  2 passed (2)' },
              { line: 7, text: ' Tests       8 passed (8)' },
              { line: 8, text: ' Duration    156ms' },
            ],
          },
        ]}
        defaultValue={['run']}
      />
    </div>
  ),
}
