# Portfolio

My personal website used as portfolio, built with Next.js and the help of AI (Google AI Studio and Gemini).

Hosted on OVH VPS and accessible at : https://emmanuel-loisance.fr.

## Deploy to production

As an automated solution with "Github Action" hasn't been implemented yet, it needs to be deployed manually, following these steps :

- Build with "npm run build"
- Move the "out" folder to the VPS with : sudo scp -r out/* ubuntu@xx.xx.xx.xx:~/portfolio-temp
- Connect to the VPS with : ssh ubuntu@xx.xx.xx.xx
- Clean the current content with : sudo rm -rf /var/www/html/*
- Move the temp folder to the nginx data folder with : sudo cp -r ~/portfolio-temp/* /var/www/html/
- Give some permissions to nginx : sudo chown -R www-data:www-data /var/www/html && sudo chmod -R 755 /var/www/html
- Clean the temp folder with : sudo rm -rf ~/portfolio-temp