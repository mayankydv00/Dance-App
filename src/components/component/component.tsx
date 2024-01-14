/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/rXLGeYIBEvs
 */
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-md shadow-md dark:bg-gray-800">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">Sign In</h2>
        <form className="space-y-4">
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-900 dark:text-gray-100" htmlFor="name">
              Name
            </Label>
            <Input className="w-full" id="name" placeholder="Enter your name" required />
          </div>
          <div className="space-y-1">
            <Label className="text-sm font-medium text-gray-900 dark:text-gray-100" htmlFor="email">
              Email
            </Label>
            <Input className="w-full" id="email" placeholder="Enter your email" required type="email" />
          </div>
          <Button className="w-full" type="submit">
            Submit
          </Button>
        </form>
      </div>
    </div>
  )
}
