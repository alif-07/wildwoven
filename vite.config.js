import { defineConfig } from 'vite';

export default defineConfig({
  base: '/wildwoven/', // আপনার ডিপ্লয়মেন্ট URL-এর সাবডিরেক্টরি পাথ
  build: {
    outDir: 'dist', // তৈরি হওয়া ফাইলগুলি কোন ডিরেক্টরিতে রাখা হবে
  },
});
