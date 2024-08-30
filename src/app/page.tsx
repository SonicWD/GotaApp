'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdminView from '@/components/AdminView'
import WorkerView from '@/components/WorkerView'
import CollectionManagementView from '@/components/CollectionManagementView'
import DashboardView from '@/components/DashboardView'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">Aplicación de Gestión de Cobros</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboard">Panel de Control</TabsTrigger>
          <TabsTrigger value="admin">Administrador</TabsTrigger>
          <TabsTrigger value="worker">Trabajador</TabsTrigger>
          <TabsTrigger value="collection">Gestión de Cobros</TabsTrigger>
        </TabsList>
        <TabsContent value="dashboard">
          <DashboardView />
        </TabsContent>
        <TabsContent value="admin">
          <AdminView />
        </TabsContent>
        <TabsContent value="worker">
          <WorkerView />
        </TabsContent>
        <TabsContent value="collection">
          <CollectionManagementView />
        </TabsContent>
      </Tabs>
    </main>
  )
}