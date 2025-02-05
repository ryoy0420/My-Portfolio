export default function Footer({ copyrightName }) {

    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="text-center py-8 text-gray-500 text-sm border-t">
        © {currentYear} {copyrightName}
      </footer>
    );
  }
  
  function StoryComponent() {
    return (
      <div className="space-y-4">
        <MainComponent />
        <MainComponent copyrightName="米山凌" />
      </div>
    );
  }
  
  
  