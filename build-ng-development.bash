git pull origin main
npm install
npm run build:dev

sudo chown -R jenkins:jenkins ./

sudo cp -r /home/linux_server/hotel-list-development/technical-test-hotel-list/dist/technical-test-hotel-list/browser/* /var/www/app-dev.alifrazansaputra.id/

sudo systemctl restart nginx
