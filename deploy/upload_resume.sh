#!/bin/bash

if [[ $1 != "" && -f $1 ]]; then
  RESUME_PATH=$1
  echo Using resume path $1
else
  RESUME_PATH=`find ~/jobs -name '*esume*.pdf'`
  if [[ ! -f $RESUME_PATH ]]; then
    echo "Resume not found."
    exit 1
  fi
  echo Found resume at $RESUME_PATH
fi

gsutil cp $RESUME_PATH gs://akhilez/resume.pdf
