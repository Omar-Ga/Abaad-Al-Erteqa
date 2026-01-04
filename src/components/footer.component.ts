
import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[#2A1E12] text-white pt-20 pb-10">
      <div class="max-w-7xl mx-auto px-6">
        
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
            <!-- Col 1: Brand -->
            <div>
                <div class="flex items-center gap-2 mb-6">
                    <div class="h-8 w-8 bg-[#8B5E3C] rounded-sm flex items-center justify-center text-white font-bold text-lg">A</div>
                    <span class="text-xl font-bold tracking-tight uppercase">Abaad | Sama</span>
                </div>
                <p class="text-gray-400 text-sm leading-relaxed mb-6">
                    Unifying architectural brilliance with safety assurance. We are your partners in building a secure future.
                </p>
                <div class="flex space-x-4">
                    <!-- Social Placeholders -->
                    <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5E3C] transition-colors cursor-pointer text-xs">Li</div>
                    <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5E3C] transition-colors cursor-pointer text-xs">Tw</div>
                    <div class="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#8B5E3C] transition-colors cursor-pointer text-xs">In</div>
                </div>
            </div>

            <!-- Col 2: Quick Links -->
            <div>
                <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Home</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">About Us</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Our Projects</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Careers</a></li>
                </ul>
            </div>

            <!-- Col 3: Services -->
            <div>
                <h4 class="text-lg font-semibold mb-6">Services</h4>
                <ul class="space-y-3 text-sm text-gray-400">
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Design Consultancy</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Safety Contracting</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Project Management</a></li>
                    <li><a href="#" class="hover:text-[#8B5E3C] transition-colors">Urban Planning</a></li>
                </ul>
            </div>

            <!-- Col 4: Contact -->
            <div>
                <h4 class="text-lg font-semibold mb-6">Contact</h4>
                <ul class="space-y-4 text-sm text-gray-400">
                    <li class="flex items-start">
                        <svg class="w-5 h-5 mr-3 text-[#8B5E3C] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        <span>King Fahd Road, Olaya Dist.<br>Riyadh, Saudi Arabia</span>
                    </li>
                    <li class="flex items-center">
                        <svg class="w-5 h-5 mr-3 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        <span>+966 11 000 0000</span>
                    </li>
                    <li class="flex items-center">
                         <svg class="w-5 h-5 mr-3 text-[#8B5E3C]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        <span>info@abaadsama.com</span>
                    </li>
                </ul>
            </div>
        </div>

        <div class="pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
            <p>&copy; 2024 Abaad Al-erteqaa Engineering & Sama Safety. All rights reserved.</p>
            <p class="mt-2 md:mt-0">Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {}
