import { Envelope, Lock } from 'phosphor-react';
import { Button } from './components/Button';
import { Checkbox } from './components/Checkbox';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Logo } from './Logo';
import './styles/global.css';

export function App() {

  return (
    <div className="flex flex-col w-screen h-screen bg-gray-900 items-center justify-center text-gray-100">
      <header className="flex flex-col items-center">
        <Logo />
        <Heading size="lg" className="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" className="text-gray-400 mt-1"> Faça Login e comece a usar!</Text>
      </header>
      <form className="flex flex-col items-stretch w-full max-w-sm mt-10">
        <label htmlFor="email" className="flex flex-col gap-3" >
          <Text className="font-semibold"> Endereço de e-mail</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>
            <TextInput.Input id="email" placeholder="Digite seu e-mail" />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className="flex flex-col gap-3 mt-4" >
          <Text className="font-semibold"> Sua Senha</Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>
            <TextInput.Input type="password" id="password" placeholder="********" />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-3 mt-2">
          <Checkbox id="remember" />
          <Text size="sm" className="text-gray-200">Lembrar de mim por 30 dias</Text>
        </label>
        <Button type="submit" className="mt-4 p">Entra na Plataforma</Button>
      </form>
      <footer className="flex flex-col items-center justify-center gap-4 mt-8">
        <Text className="flex flex-col items-center gap-4 text-sm">
        <a href="https://github.com/MSp1d3r/lab-ds" className="text-gray-400 underline hover:text-gray-200">Esqueceu sua senha?</a>
        <a href="https://www.linkedin.com/in/mspider/" className="text-gray-400 underline hover:text-gray-200">Não possui conta? Crie uma Agora!</a>
        </Text>
      </footer>
    </div>

  )
}


