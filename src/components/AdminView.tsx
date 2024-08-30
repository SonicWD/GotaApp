import { useState } from 'react'
import { Search, UserPlus, ChevronRight, DollarSign, Users, BarChart2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function AdminView() {
  const [workers, setWorkers] = useState([
    { id: 1, name: 'Juan Pérez', team: 5, collections: 10000 },
    { id: 2, name: 'María García', team: 3, collections: 8000 },
    { id: 3, name: 'Carlos Rodríguez', team: 7, collections: 12000 },
  ])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Panel de Administrador</h1>
      
      <div className="flex justify-between items-center mb-6">
        <div className="relative w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar trabajador" className="pl-8" />
        </div>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" /> Añadir Trabajador
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead>Cobros Totales</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {workers.map((worker) => (
            <TableRow key={worker.id}>
              <TableCell className="font-medium">{worker.name}</TableCell>
              <TableCell>{worker.team}</TableCell>
              <TableCell>${worker.collections.toLocaleString()}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  Ver Detalles <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Total Cobros</h3>
          <div className="flex items-center">
            <DollarSign className="h-5 w-5 mr-2 text-green-500" />
            <span className="text-2xl font-bold">$30,000</span>
          </div>
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Total Trabajadores</h3>
          <div className="flex items-center">
            <Users className="h-5 w-5 mr-2 text-blue-500" />
            <span className="text-2xl font-bold">15</span>
          </div>
        </div>
        <div className="bg-card text-card-foreground rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-2">Rendimiento</h3>
          <div className="flex items-center">
            <BarChart2 className="h-5 w-5 mr-2 text-purple-500" />
            <span className="text-2xl font-bold">85%</span>
          </div>
        </div>
      </div>
    </div>
  )
}