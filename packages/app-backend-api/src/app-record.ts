import type { App, ComponentInstance } from '@vue/devtools-api'
import type { DevtoolsBackend } from './backend'

export interface AppRecordOptions {
  app: App
  version: string
  types: { [key: string]: string | symbol }
  meta?: any
}

export interface AppRecord {
  id: string
  name: string
  options: AppRecordOptions
  backend: DevtoolsBackend
  lastInspectedComponentId: string
  instanceMap: Map<string, ComponentInstance>
  rootInstance: ComponentInstance
  componentFilter?: string
  perfGroupIds: Map<string, { groupId: number, time: number }>
  iframe: string
  meta: any
  missingInstanceQueue: Set<string>
}

/**
 * Used in the frontend
 */
export interface SimpleAppRecord {
  id: string
  name: string
  version: string
  iframe: string
}
