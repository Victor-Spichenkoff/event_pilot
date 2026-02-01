import {
    Alert,
    AlertDescription,
    AlertTitle,
} from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { Textarea } from "@/components/ui/textarea"

export function ThemePlayground() {
    return (
        <div className="space-y-10 p-6">
            <header className="space-y-2">
                <h1 className="text-3xl font-bold">Theme Playground</h1>
                <p className="text-muted-foreground">
                    Use este layout para validar cores, contraste e estados
                </p>
            </header>

            <Separator />

            {/* Buttons */}
            <Card>
                <CardHeader>
                    <CardTitle>Botões</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                    <Button>Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button disabled>Disabled</Button>
                    <Button variant={"success"}>Suc</Button>
                </CardContent>
            </Card>

            {/* Inputs */}
            <Card>
                <CardHeader>
                    <CardTitle>Inputs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 max-w-md">
                    <div className="space-y-2">
                        <Label>Email</Label>
                        <Input placeholder="email@exemplo.com" />
                    </div>

                    <div className="space-y-2">
                        <Label>Mensagem</Label>
                        <Textarea placeholder="Digite algo…" />
                    </div>

                    <div className="space-y-2">
                        <Label>Select</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Escolha uma opção" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="1">Opção 1</SelectItem>
                                <SelectItem value="2">Opção 2</SelectItem>
                                <SelectItem value="3">Opção 3</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </CardContent>
            </Card>

            {/* Checks */}
            <Card>
                <CardHeader>
                    <CardTitle>Seleções</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex items-center gap-2">
                        <Checkbox id="terms" />
                        <Label htmlFor="terms">Aceitar termos</Label>
                    </div>

                    <RadioGroup defaultValue="1" className="space-y-2">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="1" id="r1" />
                            <Label htmlFor="r1">Opção A</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="2" id="r2" />
                            <Label htmlFor="r2">Opção B</Label>
                        </div>
                    </RadioGroup>

                    <div className="flex items-center gap-2">
                        <Switch id="dark-mode" />
                        <Label htmlFor="dark-mode">Ativar opção</Label>
                    </div>
                </CardContent>
            </Card>

            {/* Feedback */}
            <Card>
                <CardHeader>
                    <CardTitle>Feedback & Estados</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex gap-2">
                        <Badge>Default</Badge>
                        <Badge variant="secondary">Secondary</Badge>
                        <Badge variant="outline">Outline</Badge>
                        <Badge variant="destructive">Error</Badge>
                    </div>

                    <Alert>
                        <AlertTitle>Info</AlertTitle>
                        <AlertDescription>
                            Esse é um alerta padrão.
                        </AlertDescription>
                    </Alert>

                    <Alert variant="destructive">
                        <AlertTitle>Erro</AlertTitle>
                        <AlertDescription>
                            Algo deu errado.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>
        </div>
    )
}
