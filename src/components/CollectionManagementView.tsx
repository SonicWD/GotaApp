import { useState } from 'react'
import { DollarSign, CheckCircle, AlertCircle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function CollectionManagementView() {
  const [recentCollections, setRecentCollections] = useState([
    { id: 1, client: 'Ana López', amount: 500, date: '2023-07-10', status: 'Completado' },
    { id: 2, client: 'Pedro Martínez', amount: 750, date: '2023-07-09', status: 'Pendiente' },
    { id: 3, client: 'Sofía Hernández', amount: 300, date: '2023-07-08', status: 'Completado' },
  ])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Gestión de Cobros</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Cobros Pendientes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <AlertCircle className="h-5 w-5 mr-2 text-yellow-500" />
              <span className="text-2xl font-bold">$2,500</span>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cobros Realizados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
              <span className="text-2xl font-bold">$5,000</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Registrar Nuevo Cobro</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="client">Cliente</Label>
                <Select>
                  <SelectTrigger id="client">
                    <SelectValue placeholder="Seleccionar cliente" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ana">Ana López</SelectItem>
                    <SelectItem value="pedro">Pedro Martínez</SelectItem>
                    <SelectItem value="sofia">Sofía Hernández</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Label htmlFor="amount">Monto</Label>
                <Input id="amount" type="number" placeholder="Ingrese el monto" />
              </div>
              <div>
                <Label htmlFor="date">Fecha</Label>
                <Input id="date" type="date" />
              </div>
              <Button type="submit">Registrar Cobro</Button>
            </form>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Cobros Recientes</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Monto</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Estado</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentCollections.map((collection) => (
                  <TableRow key={collection.id}>
                    <TableCell>{collection.client}</TableCell>
                    <TableCell>${collection.amount}</TableCell>
                    <TableCell>{collection.date}</TableCell>
                    <TableCell>
                      {collection.status === 'Completado' ? (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completado
                        </span>
                      ) : (
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                          <AlertCircle className="h-3 w-3 mr-1" />
                          Pendiente
                        </span>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}