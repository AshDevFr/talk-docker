FROM ashdev/docker-nodejs
MAINTAINER AshDev <ashdevfr@gmail.com>

WORKDIR /home/workspace

RUN npm install -g gulp bower nodemon

ADD .jshintrc /home/workspace/
ADD .jscsrc /home/workspace/
ADD .bowerrc /home/workspace/
ADD package.json /home/workspace/
ADD bower.json /home/workspace/
ADD Gulpfile.js /home/workspace/

RUN npm install

RUN bower install --config.interactive=false --allow-root

EXPOSE 9000

VOLUME /home/workspace/

CMD ["npm", "start"]
