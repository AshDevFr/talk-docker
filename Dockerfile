FROM google/nodejs
MAINTAINER AshDev <ashdevfr@gmail.com>

WORKDIR /home/workspace

RUN npm install -g gulp bower

ADD .jshintrc /home/workspace/
ADD .jscsrc /home/workspace/
ADD .bowerrc /home/workspace/
ADD package.json /home/workspace/
ADD bower.json /home/workspace/
ADD Gulpfile.js /home/workspace/

RUN npm install

ADD presentation /home/workspace/presentation
ADD public /home/workspace/public
ADD server /home/workspace/server

RUN bower install --config.interactive=false --allow-root

EXPOSE 9000

VOLUME /home/workspace/

CMD ["npm", "start"]
