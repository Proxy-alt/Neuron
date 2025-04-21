import { render, screen } from '@testing-library/react';
import Home from '../src/app/page';
import ProxyPage from '../src/app/proxy/page';
import SettingsPage from '../src/app/settings/page';
import MorePage from '../src/app/more/page';

describe('Main pages render', () => {
  it('renders Home', () => {
    render(<Home />);
    expect(screen.getByText(/| neuron/i)).toBeInTheDocument();
  });
  it('renders ProxyPage', () => {
    render(<ProxyPage />);
    expect(screen.getByText(/proxy/i)).toBeInTheDocument();
  });
  it('renders SettingsPage', () => {
    render(<SettingsPage />);
    expect(screen.getByText(/settings/i)).toBeInTheDocument();
  });
  it('renders MorePage', () => {
    render(<MorePage />);
    expect(screen.getByText(/more/i)).toBeInTheDocument();
  });
});
// ... existing code ... <no existing code, new file> ...
