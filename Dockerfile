FROM ashdev/docker-nodejs:v4.2.2
MAINTAINER AshDev <ashdevfr@gmail.com>

ENV workdir_path /home/workspace
WORKDIR ${workdir_path}

RUN npm install -g gulp bower nodemon

ADD .jshintrc ${workdir_path}
ADD .jscsrc ${workdir_path}
ADD .bowerrc ${workdir_path}
ADD package.json ${workdir_path}
ADD bower.json ${workdir_path}
ADD Gulpfile.js ${workdir_path}
ADD server ${workdir_path}/server
ADD app ${workdir_path}/app


RUN npm install

RUN bower install --config.interactive=false --allow-root

EXPOSE 9000

VOLUME ${workdir_path}

CMD ["npm", "start"]
