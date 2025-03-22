import type {PropsWithChildren} from 'react'

const layout = ({ children }: PropsWithChildren) => {
  return (
  <div className="bg-gradient-to-br from-background-to-muted">
    header
    <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
    </main>
    <footer className='border-t backdrop-blur'>
        <div className='container mx-auto px-4 text-center text-black-200'>
            <p>Made with ❤️ by Madiha</p>
        </div>
    </footer>
    </div>
  );
};

export default layout;