import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const singInFromValidation = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean(),
});

type SingInFromType = z.infer<typeof singInFromValidation>;

export function SingIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SingInFromType>();

  async function handleSingIn(data: SingInFromType) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log("Sing in with data:", data);
  }

  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Acessar painel
            </h1>
            <p className="text-sm text-muted-foreground">
              Acompanhe suas vendas pelo painel do parceiro!
            </p>
          </div>

          <form
            onSubmit={handleSubmit(handleSingIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Seu e-mail</Label>
              <Input id="email" type="email" {...register("email")} />
            </div>
            <Button type="submit" disabled={isSubmitting}>
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
}
