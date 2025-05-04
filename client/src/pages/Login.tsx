
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { DefaultLayout } from "@/components/layout/DefaultLayout";
import { Link } from "react-router-dom";

export default function Login() {
  // Mock authentication function
  const handleGoogleLogin = () => {
    alert("Google login functionality will be integrated with Supabase");
  };
  
  return (
    <DefaultLayout>
      <div className="container py-12 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
            <CardDescription>
              Sign in to your account to access all features
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full flex items-center justify-center gap-2 bg-white text-gray-800 hover:bg-gray-100 border border-gray-300" 
              onClick={handleGoogleLogin}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              Sign in with Google
            </Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="text-center text-sm">
              <p>This is a demo app. For now, please use Google sign-in.</p>
              <p className="text-muted-foreground mt-2">
                Note: Actual authentication will be implemented with Supabase.
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <Button asChild className="w-full bg-yendine-navy hover:bg-yendine-navy/90 text-white">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </DefaultLayout>
  );
}
