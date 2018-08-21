import React from 'react'

export default function PickerItem({ label, value }) {
  return <option value={value}>{label}</option>
}
