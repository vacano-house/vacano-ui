import { useState } from 'react'

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Checkbox } from '../Checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Atoms/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    actions: { disable: true },
    controls: { disable: true },
  },
}

export default meta

type Story = StoryObj<typeof Checkbox>

const items = ['Apples', 'Bananas', 'Oranges', 'Grapes']

const SelectAllExample = () => {
  const [selected, setSelected] = useState<string[]>(['Apples'])

  const allSelected = selected.length === items.length
  const someSelected = selected.length > 0 && selected.length < items.length

  const handleSelectAll = () => {
    if (allSelected || someSelected) {
      setSelected([])
    } else {
      setSelected([...items])
    }
  }

  const handleItemToggle = (item: string) => {
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]))
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <Checkbox
        checked={allSelected}
        indeterminate={someSelected}
        label="Select all fruits"
        onChange={handleSelectAll}
      />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '24px' }}>
        {items.map((item) => (
          <Checkbox
            key={item}
            checked={selected.includes(item)}
            label={item}
            onChange={() => handleItemToggle(item)}
          />
        ))}
      </div>
    </div>
  )
}

type Permission = 'read' | 'write' | 'delete' | 'admin'
const permissions: Permission[] = ['read', 'write', 'delete', 'admin']

const NestedTreeExample = () => {
  const [selectedPermissions, setSelectedPermissions] = useState<Permission[]>(['read'])
  const [emailEnabled, setEmailEnabled] = useState(true)
  const [smsEnabled, setSmsEnabled] = useState(false)
  const [pushEnabled, setPushEnabled] = useState(false)

  const allPermissions = selectedPermissions.length === permissions.length
  const somePermissions =
    selectedPermissions.length > 0 && selectedPermissions.length < permissions.length

  const notificationChildren = [emailEnabled, smsEnabled, pushEnabled]
  const allNotifications = notificationChildren.every(Boolean)
  const someNotifications = notificationChildren.some(Boolean) && !allNotifications

  const handlePermissionsAll = () => {
    if (allPermissions || somePermissions) {
      setSelectedPermissions([])
    } else {
      setSelectedPermissions([...permissions])
    }
  }

  const handlePermissionToggle = (perm: Permission) => {
    setSelectedPermissions((prev) =>
      prev.includes(perm) ? prev.filter((p) => p !== perm) : [...prev, perm],
    )
  }

  const handleNotificationsAll = () => {
    if (allNotifications || someNotifications) {
      setEmailEnabled(false)
      setSmsEnabled(false)
      setPushEnabled(false)
    } else {
      setEmailEnabled(true)
      setSmsEnabled(true)
      setPushEnabled(true)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Permissions</div>
        <Checkbox
          checked={allPermissions}
          indeterminate={somePermissions}
          label="All permissions"
          onChange={handlePermissionsAll}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '24px' }}>
          {permissions.map((perm) => (
            <Checkbox
              key={perm}
              checked={selectedPermissions.includes(perm)}
              label={perm.charAt(0).toUpperCase() + perm.slice(1)}
              onChange={() => handlePermissionToggle(perm)}
            />
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <div style={{ fontSize: '12px', fontWeight: 600, marginBottom: '4px' }}>Notifications</div>
        <Checkbox
          checked={allNotifications}
          indeterminate={someNotifications}
          label="All notifications"
          onChange={handleNotificationsAll}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', paddingLeft: '24px' }}>
          <Checkbox
            checked={emailEnabled}
            label="Email"
            onChange={(e) => setEmailEnabled(e.target.checked)}
          />
          <Checkbox
            checked={smsEnabled}
            label="SMS"
            onChange={(e) => setSmsEnabled(e.target.checked)}
          />
          <Checkbox
            checked={pushEnabled}
            label="Push"
            onChange={(e) => setPushEnabled(e.target.checked)}
          />
        </div>
      </div>
    </div>
  )
}

export const Indeterminate: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '64px' }}>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>Simple Tree</h3>
        <SelectAllExample />
      </div>
      <div>
        <h3 style={{ marginBottom: '16px', fontSize: '14px', fontWeight: 600 }}>Multiple Groups</h3>
        <NestedTreeExample />
      </div>
    </div>
  ),
}
