git pull origin main
npm install
npm run build:prod

sudo chown -R jenkins:jenkins ./

sudo cp -r /home/linux_server/hotel-list-production/technical-test-hotel-list/dist/technical-test-hotel-list/browser/* /var/www/alifrazansaputra.id/


sudo systemctl restart nginx
